'use server'
import * as dayPlanLib from '../lib/dayPlan.server'

export async function createOrLoadDayPlanAction(date) {
  return await dayPlanLib.createOrLoadDayPlan(date)
}

export async function addDayPlanItemAction(planId, input) {
  return await dayPlanLib.addDayPlanItem(planId, input)
}

export async function updateDayPlanItemMinutesAction(itemId, plannedMin) {
  return await dayPlanLib.updateDayPlanItemMinutes(itemId, plannedMin)
}

export async function deleteDayPlanItemAction(itemId) {
  return await dayPlanLib.deleteDayPlanItem(itemId)
}
