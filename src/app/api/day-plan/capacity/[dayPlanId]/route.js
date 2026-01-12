import { NextResponse } from 'next/server'
import prisma from '../../../../../lib/prisma'

/**
 * GET /api/day-plan/capacity/:dayPlanId
 * Get capacity status for a day plan
 */
export async function GET(request, { params }) {
  try {
    const dayPlanId = parseInt(params.dayPlanId)

    const dayPlan = await prisma.dayPlan.findUnique({
      where: { id: dayPlanId },
      include: { items: true }
    })

    if (!dayPlan) {
      return NextResponse.json(
        { error: 'Day plan not found' },
        { status: 404 }
      )
    }

    const usedMin = dayPlan.items.reduce((sum, item) => sum + item.plannedMin, 0)
    const remaining = dayPlan.planBudgetMin - usedMin
    const percentageUsed = Math.round((usedMin / dayPlan.planBudgetMin) * 100)

    return NextResponse.json({
      capacityMin: dayPlan.capacityMin,
      bufferMin: dayPlan.bufferMin,
      planBudgetMin: dayPlan.planBudgetMin,
      usedMin,
      remaining,
      percentageUsed,
      isNearCapacity: percentageUsed >= 80,
      isAtCapacity: percentageUsed >= 100
    })
  } catch (error) {
    console.error('Error fetching capacity:', error)
    return NextResponse.json(
      { error: 'Failed to fetch capacity status' },
      { status: 500 }
    )
  }
}

/**
 * POST /api/day-plan/capacity/:dayPlanId/check
 * Check if adding minutes would exceed capacity
 */
export async function POST(request, { params }) {
  try {
    const dayPlanId = parseInt(params.dayPlanId)
    const { plannedMin } = await request.json()

    if (!plannedMin || plannedMin <= 0) {
      return NextResponse.json(
        { error: 'plannedMin is required and must be positive' },
        { status: 400 }
      )
    }

    const dayPlan = await prisma.dayPlan.findUnique({
      where: { id: dayPlanId },
      include: { items: true }
    })

    if (!dayPlan) {
      return NextResponse.json(
        { error: 'Day plan not found' },
        { status: 404 }
      )
    }

    const currentUsed = dayPlan.items.reduce((sum, item) => sum + item.plannedMin, 0)
    const newTotal = currentUsed + plannedMin

    if (newTotal > dayPlan.planBudgetMin) {
      return NextResponse.json({
        allowed: false,
        exceeded: true,
        currentUsed,
        planBudget: dayPlan.planBudgetMin,
        attemptedTotal: newTotal,
        overBy: newTotal - dayPlan.planBudgetMin,
        message: `Adding this task would exceed your capacity by ${newTotal - dayPlan.planBudgetMin} minutes`
      })
    }

    return NextResponse.json({
      allowed: true,
      currentUsed,
      planBudget: dayPlan.planBudgetMin,
      remaining: dayPlan.planBudgetMin - newTotal
    })
  } catch (error) {
    console.error('Error checking capacity:', error)
    return NextResponse.json(
      { error: 'Failed to check capacity' },
      { status: 500 }
    )
  }
}
