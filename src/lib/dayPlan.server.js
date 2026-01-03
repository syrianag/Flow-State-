import prisma from './prisma'
import { revalidatePath } from 'next/cache'

/**
 * Result shapes:
 * Success: { ok: true, planId, planBudgetMin, usedMin }
 * Capacity exceeded: { ok: false, code: 'CAPACITY_EXCEEDED', remainingMin, overByMin }
 * Error: { ok: false, error: string }
 */

export async function createOrLoadDayPlan(date) {
  try {
    // Try to find existing plan
    let plan = await prisma.dayPlan.findUnique({ where: { date } })
    if (plan) {
      return { ok: true, planId: String(plan.id), planBudgetMin: plan.planBudgetMin, usedMin: plan.usedMin }
    }

    // NOTE: There isn't a CheckIn model in this schema. For now we create a conservative default plan.
    // Assumption: default capacity 480min (8h) with 60min buffer => planBudgetMin = 420
    const capacityMin = 480
    const bufferMin = 60
    const planBudgetMin = capacityMin - bufferMin

    plan = await prisma.dayPlan.create({ data: { date, capacityMin, bufferMin, planBudgetMin, usedMin: 0 } })

    return { ok: true, planId: String(plan.id), planBudgetMin: plan.planBudgetMin, usedMin: plan.usedMin }
  } catch (err) {
    return { ok: false, error: String(err.message || err) }
  }
}

export async function addDayPlanItem(planId, input) {
  const parsedPlanId = Number(planId)
  const plannedMin = Number(input.plannedMin || 0)
  try {
    const result = await prisma.$transaction(async (tx) => {
      const plan = await tx.dayPlan.findUnique({ where: { id: parsedPlanId } })
      if (!plan) throw new Error('DayPlan not found')

      const delta = plannedMin
      if (delta > 0 && plan.usedMin + delta > plan.planBudgetMin) {
        return { ok: false, code: 'CAPACITY_EXCEEDED', remainingMin: plan.planBudgetMin - plan.usedMin, overByMin: plan.usedMin + delta - plan.planBudgetMin }
      }

      // update usedMin
      await tx.dayPlan.update({ where: { id: parsedPlanId }, data: { usedMin: { increment: delta } } })

      const item = await tx.dayPlanItem.create({ data: { dayPlanId: parsedPlanId, title: input.title || 'Untitled', plannedMin, taskId: input.taskId ? Number(input.taskId) : null } })

      const updatedPlan = await tx.dayPlan.findUnique({ where: { id: parsedPlanId } })

      return { ok: true, planId: String(updatedPlan.id), planBudgetMin: updatedPlan.planBudgetMin, usedMin: updatedPlan.usedMin, itemId: String(item.id) }
    })

    // revalidate the product page so UI updates (outside transaction)
    try { revalidatePath('/product') } catch (e) { /* non-fatal */ }

    return result
  } catch (err) {
    return { ok: false, error: String(err.message || err) }
  }
}

export async function updateDayPlanItemMinutes(itemId, plannedMin) {
  const parsedItemId = Number(itemId)
  const newMin = Number(plannedMin)
  try {
    const result = await prisma.$transaction(async (tx) => {
      const item = await tx.dayPlanItem.findUnique({ where: { id: parsedItemId } })
      if (!item) throw new Error('DayPlanItem not found')

      const plan = await tx.dayPlan.findUnique({ where: { id: item.dayPlanId } })
      if (!plan) throw new Error('DayPlan not found')

      const delta = newMin - item.plannedMin
      if (delta > 0 && plan.usedMin + delta > plan.planBudgetMin) {
        return { ok: false, code: 'CAPACITY_EXCEEDED', remainingMin: plan.planBudgetMin - plan.usedMin, overByMin: plan.usedMin + delta - plan.planBudgetMin }
      }

      // update usedMin by delta (can be negative)
      await tx.dayPlan.update({ where: { id: plan.id }, data: { usedMin: { increment: delta } } })

      const updatedItem = await tx.dayPlanItem.update({ where: { id: parsedItemId }, data: { plannedMin: newMin } })
      const updatedPlan = await tx.dayPlan.findUnique({ where: { id: plan.id } })

      return { ok: true, planId: String(updatedPlan.id), planBudgetMin: updatedPlan.planBudgetMin, usedMin: updatedPlan.usedMin, itemId: String(updatedItem.id) }
    })

    try { revalidatePath('/product') } catch (e) { }

    return result
  } catch (err) {
    return { ok: false, error: String(err.message || err) }
  }
}

export async function deleteDayPlanItem(itemId) {
  const parsedItemId = Number(itemId)
  try {
    const result = await prisma.$transaction(async (tx) => {
      const item = await tx.dayPlanItem.findUnique({ where: { id: parsedItemId } })
      if (!item) throw new Error('DayPlanItem not found')

      // decrement usedMin by item's plannedMin
      await tx.dayPlan.update({ where: { id: item.dayPlanId }, data: { usedMin: { increment: -item.plannedMin } } })

      await tx.dayPlanItem.delete({ where: { id: parsedItemId } })

      const updatedPlan = await tx.dayPlan.findUnique({ where: { id: item.dayPlanId } })
      return { ok: true, planId: String(updatedPlan.id), planBudgetMin: updatedPlan.planBudgetMin, usedMin: updatedPlan.usedMin }
    })

    try { revalidatePath('/product') } catch (e) { }

    return result
  } catch (err) {
    return { ok: false, error: String(err.message || err) }
  }
}

export default { createOrLoadDayPlan, addDayPlanItem, updateDayPlanItemMinutes, deleteDayPlanItem }
