'use server'

import prisma from '../lib/prisma'

/**
 * Calculate if adding a task would exceed capacity
 */
export async function checkCapacityGate(dayPlanId, plannedMin) {
  const dayPlan = await prisma.dayPlan.findUnique({
    where: { id: dayPlanId },
    include: { items: true }
  })

  if (!dayPlan) {
    return { allowed: false, error: 'Day plan not found' }
  }

  const currentUsed = dayPlan.items.reduce((sum, item) => sum + item.plannedMin, 0)
  const newTotal = currentUsed + plannedMin

  if (newTotal > dayPlan.planBudgetMin) {
    return {
      allowed: false,
      exceeded: true,
      currentUsed,
      planBudget: dayPlan.planBudgetMin,
      attemptedTotal: newTotal,
      overBy: newTotal - dayPlan.planBudgetMin,
      message: `Adding this task would exceed your capacity by ${newTotal - dayPlan.planBudgetMin} minutes`
    }
  }

  return {
    allowed: true,
    currentUsed,
    planBudget: dayPlan.planBudgetMin,
    remaining: dayPlan.planBudgetMin - newTotal
  }
}

/**
 * Get capacity status for a day plan
 */
export async function getCapacityStatus(dayPlanId) {
  const dayPlan = await prisma.dayPlan.findUnique({
    where: { id: dayPlanId },
    include: { items: true }
  })

  if (!dayPlan) {
    return null
  }

  const usedMin = dayPlan.items.reduce((sum, item) => sum + item.plannedMin, 0)
  const remaining = dayPlan.planBudgetMin - usedMin
  const percentageUsed = Math.round((usedMin / dayPlan.planBudgetMin) * 100)

  return {
    capacityMin: dayPlan.capacityMin,
    bufferMin: dayPlan.bufferMin,
    planBudgetMin: dayPlan.planBudgetMin,
    usedMin,
    remaining,
    percentageUsed,
    isNearCapacity: percentageUsed >= 80,
    isAtCapacity: percentageUsed >= 100,
    items: dayPlan.items
  }
}

/**
 * Add item to day plan with capacity validation
 */
export async function addDayPlanItem(dayPlanId, itemData) {
  const { title, plannedMin, taskId } = itemData

  // Check capacity gate first
  const gateCheck = await checkCapacityGate(dayPlanId, plannedMin)
  
  if (!gateCheck.allowed) {
    return {
      success: false,
      error: gateCheck.message || 'Capacity exceeded',
      gateCheck
    }
  }

  // Add the item
  const item = await prisma.dayPlanItem.create({
    data: {
      dayPlanId,
      title,
      plannedMin,
      taskId: taskId || null
    }
  })

  // Update used minutes
  await updateDayPlanUsedMinutes(dayPlanId)

  return {
    success: true,
    item,
    gateCheck
  }
}

/**
 * Update a day plan item (shrink planned minutes only)
 */
export async function updateDayPlanItem(itemId, plannedMin) {
  const item = await prisma.dayPlanItem.findUnique({
    where: { id: itemId }
  })

  if (!item) {
    return { success: false, error: 'Item not found' }
  }

  // Only allow shrinking, not expanding
  if (plannedMin > item.plannedMin) {
    // Check capacity if expanding
    const adjustment = plannedMin - item.plannedMin
    const gateCheck = await checkCapacityGate(item.dayPlanId, adjustment)
    
    if (!gateCheck.allowed) {
      return {
        success: false,
        error: 'Cannot expand task - would exceed capacity',
        gateCheck
      }
    }
  }

  const updated = await prisma.dayPlanItem.update({
    where: { id: itemId },
    data: { plannedMin }
  })

  await updateDayPlanUsedMinutes(item.dayPlanId)

  return {
    success: true,
    item: updated
  }
}

/**
 * Remove item from day plan
 */
export async function removeDayPlanItem(itemId) {
  const item = await prisma.dayPlanItem.findUnique({
    where: { id: itemId }
  })

  if (!item) {
    return { success: false, error: 'Item not found' }
  }

  await prisma.dayPlanItem.delete({
    where: { id: itemId }
  })

  await updateDayPlanUsedMinutes(item.dayPlanId)

  return { success: true }
}

/**
 * Update the usedMin field on DayPlan
 */
async function updateDayPlanUsedMinutes(dayPlanId) {
  const items = await prisma.dayPlanItem.findMany({
    where: { dayPlanId }
  })

  const usedMin = items.reduce((sum, item) => sum + item.plannedMin, 0)

  await prisma.dayPlan.update({
    where: { id: dayPlanId },
    data: { usedMin }
  })

  return usedMin
}

/**
 * Recalculate capacity after check-in change
 */
export async function updateCapacity(dayPlanId, capacityMin, bufferMin) {
  const planBudgetMin = capacityMin - bufferMin

  // Update the day plan
  const dayPlan = await prisma.dayPlan.update({
    where: { id: dayPlanId },
    data: {
      capacityMin,
      bufferMin,
      planBudgetMin
    },
    include: { items: true }
  })

  // Check if current plan exceeds new budget
  const usedMin = dayPlan.items.reduce((sum, item) => sum + item.plannedMin, 0)
  
  if (usedMin > planBudgetMin) {
    return {
      success: true,
      dayPlan,
      warning: 'Current plan exceeds new capacity - please adjust',
      exceeded: usedMin - planBudgetMin
    }
  }

  return {
    success: true,
    dayPlan
  }
}
