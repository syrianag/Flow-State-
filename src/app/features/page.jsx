"use client"

import { useState } from 'react'
import { Shield, Activity, Target, Timer, Calendar, Check, Play, Pause } from 'lucide-react'

export default function Features() {
  const [activeDemo, setActiveDemo] = useState(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-sage-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-3xl font-extrabold text-gray-900">
              Features Built for Sustainable Success
            </h1>
            <p className="text-xl text-gray-700">
              Every feature is designed with one goal: help you achieve more while maintaining your wellbeing
            </p>
          </div>
        </div>
      </section>

      {/* Feature 1: Capacity Gate */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center">
                <Shield className="text-teal-600" size={32} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Capacity Gate</h2>
                <p className="text-gray-700">Your guardian against overcommitment</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="mb-4 text-lg font-medium text-gray-900">What it does:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Check className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                    <span>Monitors your daily and weekly capacity limits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                    <span>Prevents you from adding tasks when you're at capacity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                    <span>Suggests alternatives when you try to overcommit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                    <span>Learns your actual capacity over time</span>
                  </li>
                </ul>

                <div className="mt-6 bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <p className="font-semibold text-gray-900">Why it matters:</p>
                  <p className="text-sm text-gray-700 mt-2">
                    The number one cause of burnout is taking on more than you can handle. 
                    Capacity Gate acts like a protective barrier, ensuring you only commit to 
                    what's sustainable.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-gray-900">Today's Capacity</span>
                    <span className="text-sm text-orange-600 font-semibold">85% Full</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div className="bg-gradient-to-r from-teal-500 to-orange-400 h-3 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <p className="text-xs text-gray-600">6.8 hours of 8 hours planned</p>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🦦</span>
                    </div>
                    <div>
                      <p className="mb-2 font-semibold text-gray-900">Whoa there! You're almost at capacity.</p>
                      <p className="text-sm mb-3 text-gray-700">Adding this task would push you to 95%. Would you like to:</p>
                      <div className="space-y-2">
                        <button className="w-full text-left bg-white hover:bg-gray-50 px-3 py-2 rounded text-sm transition-colors">→ Move tomorrow's task to next week</button>
                        <button className="w-full text-left bg-white hover:bg-gray-50 px-3 py-2 rounded text-sm transition-colors">→ Schedule this for tomorrow instead</button>
                        <button className="w-full text-left bg-white hover:bg-gray-50 px-3 py-2 rounded text-sm transition-colors">→ Add anyway (not recommended)</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Recovery Mode */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-sage-100 rounded-xl flex items-center justify-center">
                <Activity className="text-sage-700" size={32} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Recovery Mode</h2>
                <p className="text-gray-700">Automatic adaptation when you need it most</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="mb-4 text-lg font-medium text-gray-900">What it does:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Check className="text-sage-700 mt-1 flex-shrink-0" size={20} />
                    <span>Monitors completion rates and energy patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-sage-700 mt-1 flex-shrink-0" size={20} />
                    <span>Detects early signs of burnout automatically</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-sage-700 mt-1 flex-shrink-0" size={20} />
                    <span>Reduces expectations to "minimum viable progress"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-sage-700 mt-1 flex-shrink-0" size={20} />
                    <span>Guides you back to normal when ready</span>
                  </li>
                </ul>

                <div className="mt-6 bg-sage-50 rounded-lg p-4 border-l-4 border-sage-600">
                  <p className="font-semibold text-gray-900">Why it matters:</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Burnout doesn't happen overnight—it's a gradual decline. Recovery Mode catches 
                    you before you spiral and creates space for rest without the guilt.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-gradient-to-br from-sage-100 to-teal-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-sage-600 rounded-full flex items-center justify-center">
                      <Activity className="text-white" size={20} />
                    </div>
                    <span className="font-semibold text-gray-900">Recovery Mode Active</span>
                  </div>
                  <p className="text-sm text-gray-700">Otto noticed you've been running low on energy. Your plan has been adjusted for the next 3 days.</p>
                </div>

                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Original plan:</span>
                    <span className="line-through font-semibold">8 tasks/day</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Adjusted to:</span>
                    <span className="font-semibold text-green-700">3 essential tasks/day</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Focus:</span>
                    <span className="font-semibold">Quality over quantity</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Today's Essentials:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-sage-600 rounded-full"></div>
                      <span>Team standup (15 min)</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-sage-600 rounded-full"></div>
                      <span>Review PR #234 (30 min)</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-sage-600 rounded-full"></div>
                      <span>Take a proper lunch break</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Next Action Enforcement */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center">
                <Target className="text-teal-600" size={32} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Next Action Enforcement</h2>
                <p className="text-gray-700">Kill procrastination before it starts</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="mb-4 text-lg font-medium text-gray-900">What it does:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Check className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                    <span>Rejects vague tasks like "work on project"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                    <span>Requires a specific first action for every task</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                    <span>Helps you identify immediate entry points</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                    <span>Eliminates decision fatigue when starting work</span>
                  </li>
                </ul>

                <div className="mt-6 bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <p className="font-semibold text-gray-900">Why it matters:</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Procrastination thrives on vagueness. When you know exactly what to do first, 
                    starting becomes effortless. This is the difference between "I should work on 
                    that" and "I'll open this file and edit this section."
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">❌ Rejected Task:</p>
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3">
                    <p className="font-semibold text-gray-900">"Work on portfolio"</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg">🦦</span>
                    </div>
                    <div>
                      <p className="mb-2 font-semibold text-gray-900">This task is too vague!</p>
                      <p className="text-sm mb-3 text-gray-700">What's the first specific action you'll take? Examples:</p>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• "Open Figma and create hero wireframe"</li>
                        <li>• "Write About page copy in Google Docs"</li>
                        <li>• "Export project screenshots from XD"</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">✅ Accepted Task:</p>
                  <div className="bg-teal-50 border-2 border-teal-500 rounded-lg p-3">
                    <p className="mb-1 font-semibold text-gray-900">"Open Figma and create hero section wireframe"</p>
                    <p className="text-xs text-gray-600">Clear action • Easy to start • No decision fatigue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Focus Blocks */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-sage-100 rounded-xl flex items-center justify-center">
                <Timer className="text-sage-700" size={32} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Focus Blocks</h2>
                <p className="text-gray-700">Turn time into actionable feedback</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="mb-4 text-lg font-medium text-gray-900">What it does:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Check className="text-sage-700 mt-1 flex-shrink-0" size={20} />
                    <span>Launch dedicated focus timers for each task</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-sage-700 mt-1 flex-shrink-0" size={20} />
                    <span>Track actual time vs. estimated time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-sage-700 mt-1 flex-shrink-0" size={20} />
                    <span>Show live progress and motivation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-sage-700 mt-1 flex-shrink-0" size={20} />
                    <span>Improve future planning with real data</span>
                  </li>
                </ul>

                <div className="mt-6 bg-sage-50 rounded-lg p-4 border-l-4 border-sage-600">
                  <p className="font-semibold text-gray-900">Why it matters:</p>
                  <p className="text-sm text-gray-700 mt-2">
                    The app feels "alive" when your actions create visible progress. Plus, tracking 
                    real time makes you better at estimating, which makes future planning more accurate 
                    and less stressful.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-6 text-white mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm opacity-90">Active Focus Block</span>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                        <Pause className="text-white" size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <h4 className="mb-4">Create homepage wireframe</h4>
                  
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-2 font-bold">42:18</div>
                    <p className="text-sm opacity-90">of 60:00 estimated</p>
                  </div>

                  <div className="w-full bg-white/20 rounded-full h-3 mb-4">
                    <div className="bg-white h-3 rounded-full transition-all" style={{ width: '70%' }}></div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-semibold">70% complete</span>
                  </div>
                </div>

                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Tasks completed today:</span>
                    <span className="font-semibold">4 of 6</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Focus time today:</span>
                    <span className="font-semibold">3h 42m</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Estimation accuracy:</span>
                    <span className="font-semibold text-teal-600">↑ 12% this week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 5: Mid-Day Replan */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center">
                <Calendar className="text-teal-600" size={32} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Mid-Day Replan</h2>
                <p className="text-gray-700">Adapt when life happens</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="mb-4 text-lg font-medium text-gray-900">What it does:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Check className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                    <span>Easily adjust your schedule mid-day</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                    <span>Otto helps reprioritize remaining tasks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                    <span>Moves tasks to tomorrow without guilt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                    <span>Maintains realistic expectations</span>
                  </li>
                </ul>

                <div className="mt-6 bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <p className="font-semibold text-gray-900">Why it matters:</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Plans change, and that's okay. Mid-Day Replan removes the stress of "falling 
                    behind" by helping you adapt intelligently. No more carrying guilt about 
                    unfinished tasks—just smart adjustments.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-gray-900">Today's Plan (2:30 PM)</span>
                    <button className="text-teal-600 text-sm font-semibold">Replan</button>
                  </div>
                  
                  <div className="space-y-2 mb-4 text-gray-700">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Check size={16} />
                      <span className="line-through">Morning standup</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Check size={16} />
                      <span className="line-through">Review PR #234</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                      <span>Create wireframes (2h)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                      <span>Client call prep (45m)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                      <span>Update documentation (1h)</span>
                    </div>
                  </div>

                  <div className="text-sm text-orange-600 bg-orange-50 rounded p-2">⚠️ Time remaining: 3h 30m for 3h 45m of work</div>
                </div>

                <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🦦</span>
                    </div>
                    <div>
                      <p className="mb-2 font-semibold text-gray-900">Need to adjust your plan?</p>
                      <p className="text-sm mb-3 text-gray-700">You're running a bit behind. Here's what I suggest:</p>
                      <div className="space-y-2">
                        <button className="w-full text-left bg-white hover:bg-gray-50 px-3 py-2 rounded text-sm transition-colors">→ Move "Update documentation" to tomorrow</button>
                        <button className="w-full text-left bg-white hover:bg-gray-50 px-3 py-2 rounded text-sm transition-colors">→ Reduce wireframes to 1.5h (ship MVP)</button>
                        <button className="w-full text-left bg-white hover:bg-gray-50 px-3 py-2 rounded text-sm transition-colors">→ I'll handle it, no changes needed</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Calendar Integration */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-sage-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
              <Calendar className="text-teal-600" size={40} />
            </div>
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">Google Calendar Integration</h2>
            <p className="text-xl mb-8 text-gray-700">
              Connect your calendar and let Otto create the optimal plan around your existing commitments. 
              He'll find the best times for focus work, respect your meetings, and ensure you have breathing 
              room between tasks.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-gray-700">
                <h4 className="mb-3 text-gray-900">Smart Scheduling</h4>
                <p className="text-sm">Otto finds optimal time slots based on your energy patterns and calendar gaps</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-gray-700">
                <h4 className="mb-3 text-gray-900">Auto-Sync</h4>
                <p className="text-sm">Changes to your calendar automatically update your Flow State plan</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-gray-700">
                <h4 className="mb-3 text-gray-900">Buffer Time</h4>
                <p className="text-sm">Automatically adds recovery time between meetings and focus blocks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="container text-center">
          <h2 className="text-white mb-6 text-2xl">Ready to Experience These Features?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">Start your free trial and see how Flow State transforms your productivity</p>
          <button className="bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold">Start Free Trial</button>
        </div>
      </section>
    </div>
  )
}
