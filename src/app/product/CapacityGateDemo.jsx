'use client'

import { useState } from 'react'
import { Shield, AlertTriangle, CheckCircle, Plus, Trash2 } from 'lucide-react'

export default function CapacityGateDemo() {
  // Mock day plan with capacity limits
  const [capacity] = useState({
    capacityMin: 480, // 8 hours
    bufferMin: 120,   // 2 hours buffer
    planBudgetMin: 360 // 6 hours available for planning
  })

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Team standup', plannedMin: 30 },
    { id: 2, title: 'Review PR #234', plannedMin: 60 },
    { id: 3, title: 'Design homepage', plannedMin: 120 }
  ])

  const [newTaskName, setNewTaskName] = useState('')
  const [newTaskMinutes, setNewTaskMinutes] = useState(60)
  const [attemptedAdd, setAttemptedAdd] = useState(false)

  const usedMin = tasks.reduce((sum, task) => sum + task.plannedMin, 0)
  const remaining = capacity.planBudgetMin - usedMin
  const percentageUsed = Math.round((usedMin / capacity.planBudgetMin) * 100)
  const isNearCapacity = percentageUsed >= 80
  const isAtCapacity = remaining <= 0

  const addTask = () => {
    setAttemptedAdd(true)
    
    if (newTaskMinutes > remaining) {
      // Capacity gate blocks it!
      setTimeout(() => setAttemptedAdd(false), 3000)
      return
    }

    if (newTaskName.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        title: newTaskName,
        plannedMin: newTaskMinutes
      }])
      setNewTaskName('')
      setNewTaskMinutes(60)
      setAttemptedAdd(false)
    }
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
    setAttemptedAdd(false)
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
      {/* Left: Capacity Status */}
      <div className="ai-feature-card" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <Shield style={{ color: '#4fd1c5' }} size={32} />
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.25rem' }}>Capacity Gate</h3>
            <p style={{ fontSize: '0.875rem', color: '#a0a0a0' }}>Your burnout protection</p>
          </div>
        </div>

        {/* Capacity breakdown */}
        <div style={{ background: 'rgba(79,209,197,0.05)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#a0a0a0' }}>
            <span>Total capacity today:</span>
            <span style={{ color: '#ffffff', fontWeight: '600' }}>{capacity.capacityMin} min</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#a0a0a0' }}>
            <span>Protected buffer:</span>
            <span style={{ color: '#ffffff', fontWeight: '600' }}>- {capacity.bufferMin} min</span>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', fontWeight: '600' }}>
              <span style={{ color: '#4fd1c5' }}>Plan budget:</span>
              <span style={{ color: '#4fd1c5' }}>{capacity.planBudgetMin} min</span>
            </div>
          </div>
        </div>

        {/* Current usage */}
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
            <span style={{ color: '#a0a0a0' }}>Used: {usedMin} min</span>
            <span style={{ color: isAtCapacity ? '#f87171' : '#4fd1c5', fontWeight: '600' }}>
              {remaining} min remaining
            </span>
          </div>
          
          {/* Progress bar */}
          <div style={{ width: '100%', height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '9999px', overflow: 'hidden' }}>
            <div style={{
              width: `${Math.min(percentageUsed, 100)}%`,
              height: '100%',
              background: isAtCapacity ? '#f87171' : isNearCapacity ? '#fb923c' : '#4fd1c5',
              transition: 'all 0.3s ease',
              borderRadius: '9999px'
            }}></div>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#a0a0a0', marginTop: '0.25rem', textAlign: 'right' }}>
            {percentageUsed}% of budget used
          </p>
        </div>

        {/* Status message */}
        {isAtCapacity && (
          <div style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', borderRadius: '8px', padding: '0.75rem', display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
            <AlertTriangle style={{ color: '#f87171', flexShrink: 0 }} size={18} />
            <p style={{ fontSize: '0.875rem', color: '#f87171' }}>At capacity! Cannot add more tasks.</p>
          </div>
        )}
        
        {isNearCapacity && !isAtCapacity && (
          <div style={{ background: 'rgba(251,146,60,0.1)', border: '1px solid rgba(251,146,60,0.3)', borderRadius: '8px', padding: '0.75rem', display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
            <AlertTriangle style={{ color: '#fb923c', flexShrink: 0 }} size={18} />
            <p style={{ fontSize: '0.875rem', color: '#fb923c' }}>Near capacity - be careful adding more!</p>
          </div>
        )}

        {!isNearCapacity && (
          <div style={{ background: 'rgba(79,209,197,0.1)', border: '1px solid rgba(79,209,197,0.3)', borderRadius: '8px', padding: '0.75rem', display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
            <CheckCircle style={{ color: '#4fd1c5', flexShrink: 0 }} size={18} />
            <p style={{ fontSize: '0.875rem', color: '#4fd1c5' }}>Healthy capacity - room for more tasks</p>
          </div>
        )}
      </div>

      {/* Right: Task Management */}
      <div className="ai-feature-card" style={{ padding: '1.5rem' }}>
        <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#ffffff', marginBottom: '1rem' }}>Today's Tasks</h4>
        
        {/* Current tasks */}
        <div style={{ marginBottom: '1.5rem' }}>
          {tasks.map(task => (
            <div key={task.id} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '0.75rem',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '6px',
              marginBottom: '0.5rem',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <div>
                <p style={{ color: '#ffffff', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{task.title}</p>
                <p style={{ color: '#a0a0a0', fontSize: '0.75rem' }}>{task.plannedMin} minutes</p>
              </div>
              <button
                onClick={() => removeTask(task.id)}
                style={{
                  padding: '0.5rem',
                  background: 'rgba(248,113,113,0.1)',
                  border: '1px solid rgba(248,113,113,0.3)',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'all 0.2s'
                }}
              >
                <Trash2 style={{ color: '#f87171' }} size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Add new task */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
          <h5 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#a0a0a0', marginBottom: '0.75rem' }}>Add New Task</h5>
          
          <input
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            placeholder="Task name..."
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '6px',
              color: '#ffffff',
              fontSize: '0.875rem',
              marginBottom: '0.75rem'
            }}
          />

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
            <input
              type="number"
              value={newTaskMinutes}
              onChange={(e) => setNewTaskMinutes(parseInt(e.target.value) || 0)}
              min="15"
              max="480"
              step="15"
              style={{
                flex: 1,
                padding: '0.75rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '6px',
                color: '#ffffff',
                fontSize: '0.875rem'
              }}
            />
            <span style={{ color: '#a0a0a0', fontSize: '0.875rem' }}>minutes</span>
          </div>

          <button
            onClick={addTask}
            disabled={!newTaskName.trim()}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: newTaskMinutes > remaining ? 'rgba(248,113,113,0.2)' : '#4fd1c5',
              color: newTaskMinutes > remaining ? '#f87171' : '#1a2733',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: newTaskName.trim() ? 'pointer' : 'not-allowed',
              opacity: newTaskName.trim() ? 1 : 0.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s'
            }}
          >
            <Plus size={18} />
            Add Task ({newTaskMinutes} min)
          </button>

          {/* Capacity gate rejection message */}
          {attemptedAdd && newTaskMinutes > remaining && (
            <div style={{
              marginTop: '1rem',
              background: 'rgba(248,113,113,0.1)',
              border: '2px solid rgba(248,113,113,0.4)',
              borderRadius: '8px',
              padding: '1rem',
              animation: 'shake 0.5s'
            }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                <Shield style={{ color: '#f87171', flexShrink: 0, marginTop: '0.125rem' }} size={20} />
                <div>
                  <p style={{ color: '#f87171', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.875rem' }}>🛑 Capacity Gate Blocked</p>
                  <p style={{ color: '#fca5a5', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                    This would exceed your daily budget by <strong>{newTaskMinutes - remaining} minutes</strong>
                  </p>
                  <p style={{ color: '#fca5a5', fontSize: '0.75rem' }}>
                    Options: Remove another task, or reduce the time estimate
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
