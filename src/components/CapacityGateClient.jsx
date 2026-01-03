"use client"
import { useEffect, useState } from 'react'
import { createOrLoadDayPlanAction, addDayPlanItemAction } from '../actions/dayPlan.actions'

export default function CapacityGateClient({ date }) {
  const [plan, setPlan] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [minutes, setMinutes] = useState(15)
  const [showExceeded, setShowExceeded] = useState(null)

  useEffect(() => {
    if (!date) return
    // Call Server Action to create or load plan
    createOrLoadDayPlanAction(date)
      .then(setPlan)
      .catch(err => setError(String(err)))
  }, [date])

  if (error) return <div className="text-red-400">{error}</div>
  if (!plan) return <div>Loading plan…</div>

  const remaining = plan.ok ? plan.planBudgetMin - plan.usedMin : 0

  async function add() {
    setLoading(true)
    const json = await addDayPlanItemAction(plan.planId, { title: 'Quick task', plannedMin: Number(minutes) })
    setLoading(false)
    if (!json.ok && json.code === 'CAPACITY_EXCEEDED') {
      setShowExceeded(json)
      return
    }
    if (!json.ok) {
      setError(json.error || 'Unknown')
      return
    }
    // Update local plan quickly
    setPlan({ ok: true, planId: json.planId, planBudgetMin: json.planBudgetMin, usedMin: json.usedMin })
  }

  return (
    <div className="p-4 bg-card-dark rounded-lg">
      <div className="mb-2">Remaining: <strong>{remaining} min</strong></div>
      <div className="flex gap-2 items-center mb-3">
        <input type="number" value={minutes} min={1} max={Math.max(1, remaining)} onChange={(e)=>setMinutes(e.target.value)} className="w-24 p-2 rounded bg-[#111]" />
        <button disabled={remaining <= 0 || loading} onClick={add} className="px-3 py-2 bg-teal rounded disabled:opacity-50">Add to Today</button>
      </div>

      {showExceeded ? (
        <div className="p-3 bg-[#2b1111] rounded text-sm">
          <div>You're over budget by <strong>{showExceeded.overByMin} minutes</strong>.</div>
          <div className="mt-2 flex gap-2">
            <button onClick={() => { setMinutes(showExceeded.remainingMin); setShowExceeded(null) }} className="px-2 py-1 bg-sage rounded">Shrink to remaining</button>
            <button onClick={() => setShowExceeded(null)} className="px-2 py-1 bg-gray rounded">Dismiss</button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
