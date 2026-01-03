export async function POST(req) {
  try {
    const body = await req.json()
    const action = body.action

    const mod = await import('../../../lib/dayPlan.server.js')
    const lib = mod.default || mod

    if (action === 'createOrLoadDayPlan') {
      const res = await lib.createOrLoadDayPlan(body.date)
      return new Response(JSON.stringify(res), { status: 200, headers: { 'Content-Type': 'application/json' } })
    }

    if (action === 'addDayPlanItem') {
      const res = await lib.addDayPlanItem(body.planId, body.input)
      return new Response(JSON.stringify(res), { status: 200, headers: { 'Content-Type': 'application/json' } })
    }

    if (action === 'updateDayPlanItemMinutes') {
      const res = await lib.updateDayPlanItemMinutes(body.itemId, body.plannedMin)
      return new Response(JSON.stringify(res), { status: 200, headers: { 'Content-Type': 'application/json' } })
    }

    if (action === 'deleteDayPlanItem') {
      const res = await lib.deleteDayPlanItem(body.itemId)
      return new Response(JSON.stringify(res), { status: 200, headers: { 'Content-Type': 'application/json' } })
    }

    return new Response(JSON.stringify({ ok: false, error: 'Unknown action' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err.message || err) }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }
}
