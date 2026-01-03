"use client"

import { useState } from 'react'
import { Users, Eye, Edit3, Plus, CheckCircle } from 'lucide-react'

export default function RubricPage() {
  const [students] = useState([
    { id: '1', name: 'Alex Johnson', email: 'alex@school.edu', completionRate: 92, burnoutRisk: 'low', lastActive: '2 hours ago' },
    { id: '2', name: 'Sam Chen', email: 'sam@school.edu', completionRate: 68, burnoutRisk: 'medium', lastActive: '5 hours ago' },
    { id: '3', name: 'Jordan Williams', email: 'jordan@school.edu', completionRate: 45, burnoutRisk: 'high', lastActive: '1 day ago' },
    { id: '4', name: 'Taylor Brown', email: 'taylor@school.edu', completionRate: 88, burnoutRisk: 'low', lastActive: '30 min ago' },
  ])

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'low': return 'bg-teal-100 text-teal-700'
      case 'medium': return 'bg-orange-100 text-orange-700'
      case 'high': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getRiskBorder = (risk) => {
    switch (risk) {
      case 'low': return 'border-teal-200'
      case 'medium': return 'border-orange-200'
      case 'high': return 'border-red-200'
      default: return 'border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-12">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
              <Users className="text-teal-600" size={24} />
            </div>
            <div>
              <h1 style={{ color: 'var(--color-charcoal)' }} className="text-xl font-bold">Student Rubric</h1>
              <p className="text-sm text-gray-600">Monitor student progress and wellbeing</p>
            </div>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={18} />
            Create Rubric
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 style={{ color: 'var(--color-charcoal)' }} className="text-lg font-semibold">Student Overview</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-4 text-sm text-gray-600">Student</th>
                  <th className="text-left px-6 py-4 text-sm text-gray-600">Completion Rate</th>
                  <th className="text-left px-6 py-4 text-sm text-gray-600">Burnout Risk</th>
                  <th className="text-left px-6 py-4 text-sm text-gray-600">Last Active</th>
                  <th className="text-right px-6 py-4 text-sm text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className={`border-t ${getRiskBorder(student.burnoutRisk)} hover:bg-gray-50`}>
                    <td className="px-6 py-4">
                      <div>
                        <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>{student.name}</p>
                        <p className="text-sm text-gray-600">{student.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-teal-500 h-2 rounded-full" style={{ width: `${student.completionRate}%` }} />
                        </div>
                        <span className="text-sm font-semibold">{student.completionRate}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs ${getRiskColor(student.burnoutRisk)}`} style={{ fontWeight: 600 }}>
                        {student.burnoutRisk.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{student.lastActive}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><Eye size={16} /></button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><Edit3 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h3 className="mb-6 text-lg font-semibold" style={{ color: 'var(--color-charcoal)' }}>Productivity Rubric Template</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-teal-50 rounded p-3">
              <p style={{ fontWeight: 600, color: 'var(--color-teal)' }} className="mb-1">Excellent (90-100%)</p>
              <p className="text-gray-600 text-xs">Consistently completes tasks on time with high quality</p>
            </div>
            <div className="bg-orange-50 rounded p-3">
              <p style={{ fontWeight: 600, color: 'var(--color-sage)' }} className="mb-1">Good (70-89%)</p>
              <p className="text-gray-600 text-xs">Completes most tasks with occasional delays</p>
            </div>
            <div className="bg-gray-50 rounded p-3">
              <p style={{ fontWeight: 600 }} className="mb-1">Needs Support (&lt;70%)</p>
              <p className="text-gray-600 text-xs">Struggles with consistent completion, may need intervention</p>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="btn-primary">Save Rubric</button>
            <button className="btn-secondary">Export as PDF</button>
          </div>
        </div>

      </div>
    </div>
  )
}

