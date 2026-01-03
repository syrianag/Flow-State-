import Link from 'next/link'
import CapacityGateClient from '../../components/CapacityGateClient'
import { Shield, Activity, Target, Timer, Calendar, BarChart3 } from 'lucide-react'

export default function ProductPage() {
  const today = new Date().toISOString().slice(0, 10)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-sage-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-3xl font-extrabold text-gray-900">How Flow State Works</h1>
            <p className="text-xl text-gray-700">A complete system designed to keep you productive, focused, and energized—without the burnout</p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full mb-6">
                <p className="text-sm">Smart Planning</p>
              </div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">AI-Powered Daily Planning</h2>
              <p className="mb-4 text-gray-700">Every morning, Otto helps you plan your day by analyzing your capacity, energy levels, and upcoming commitments. Connect your Google Calendar, and Otto creates the optimal schedule that respects your limits.</p>
              <p className="text-gray-700">Unlike traditional planners, Flow State actively prevents overcommitment. The Capacity Gate ensures you never take on more than you can sustainably handle.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-teal-500">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="text-teal-600" size={20} />
                    <span className="font-semibold text-gray-900">Calendar Integration</span>
                  </div>
                  <p className="text-sm text-gray-700">Syncs with Google Calendar for smart scheduling</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-sage-600">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="text-sage-600" size={20} />
                    <span className="font-semibold text-gray-900">Capacity Protection</span>
                  </div>
                  <p className="text-sm text-gray-700">Prevents task overload automatically</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-teal-500">
                  <div className="flex items-center gap-3 mb-2">
                    <BarChart3 className="text-teal-600" size={20} />
                    <span className="font-semibold text-gray-900">Energy Analysis</span>
                  </div>
                  <p className="text-sm text-gray-700">Learns your peak productivity times</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-charcoal-900 to-charcoal-800 rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(135deg, var(--color-charcoal-dark), var(--color-charcoal))' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                    <Timer className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold">Active Focus Session</h4>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-gray-300 mb-2">Current Task</p>
                  <p className="text-lg font-semibold">Finish product mockups</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Time Remaining</span>
                    <span className="text-2xl font-bold">23:45</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-teal-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-lg transition-colors">Pause</button>
                  <button className="flex-1 bg-teal-500 hover:bg-teal-600 py-2 rounded-lg transition-colors">Complete</button>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-sage-100 text-sage-700 rounded-full mb-6">
                <p className="text-sm">Focus Tracking</p>
              </div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Focus Blocks That Actually Work</h2>
              <p className="mb-4 text-gray-700">Each task gets dedicated focus time with built-in timers and progress tracking. The app feels "alive" as it monitors your work and provides real-time feedback to improve your planning.</p>
              <p className="text-gray-700">Time data flows back into Otto's planning algorithm, helping you get better at estimating how long things actually take—not how long you wish they took.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Five Features That Change Everything</h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-700">Each feature is designed to protect your wellbeing while maximizing your effectiveness</p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="card bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="text-teal-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">1. Capacity Gate</h3>
                  <p className="mb-3 text-gray-700">The system actively prevents you from sneaking extra tasks into your daily or weekly budget. When you hit your capacity limit, Otto steps in and helps you prioritize or defer tasks.</p>
                  <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
                    <p className="text-sm text-gray-900"><strong>Example:</strong> "You've reached 90% of your daily capacity. Would you like to reschedule this task for tomorrow or swap it with something less urgent?"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Activity className="text-sage-700" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">2. Recovery Mode</h3>
                  <p className="mb-3 text-gray-700">When the system detects signs of burnout (missed tasks, low completion rates, erratic patterns), it automatically adapts by reducing expectations and shifting to "minimum viable progress" mode.</p>
                  <div className="bg-sage-50 rounded-lg p-4 border-l-4 border-sage-600">
                    <p className="text-sm text-gray-900"><strong>Example:</strong> "I've noticed you're running low on energy. I've reduced today's plan to just the essentials. Let's focus on recovery."</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-teal-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">3. Next Action Enforcement</h3>
                  <p className="mb-3 text-gray-700">Prevents vague tasks from entering your Today Plan. Every planned task must have an immediate, specific entry point. No more "work on portfolio"—it becomes "Open Figma and create hero section wireframe."</p>
                  <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
                    <p className="text-sm text-gray-900"><strong>Example:</strong> "This task is too vague. What's the first specific action you'll take when you start working on it?"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Timer className="text-sage-700" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">4. Focus Blocks Tied to Tasks</h3>
                  <p className="mb-3 text-gray-700">Every task can launch a dedicated focus timer that tracks actual time spent, shows live progress, and creates feedback data that improves future planning. Makes the app feel interactive and "alive."</p>
                  <div className="bg-sage-50 rounded-lg p-4 border-l-4 border-sage-600">
                    <p className="text-sm text-gray-900"><strong>Example:</strong> "You estimated 1 hour but finished in 45 minutes! I'll adjust future estimates for similar tasks."</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-teal-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">5. Mid-Day Replan</h3>
                  <p className="mb-3 text-gray-700">Life happens. When your schedule changes mid-day, easily replan without guilt. Otto helps you adjust priorities and move tasks around while maintaining realistic expectations.</p>
                  <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
                    <p className="text-sm text-gray-900"><strong>Example:</strong> "I see you have 3 tasks left and only 2 hours. Which one should we move to tomorrow?"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/features" className="btn-primary">Explore Features in Detail</Link>
          </div>
        </div>
      </section>

      {/* Otto Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-6xl">🦦</span>
            </div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Meet Otto: Your AI Guide</h2>
            <p className="text-xl mb-6 text-gray-700">Otto is more than a chatbot—he's an intelligent system that learns your patterns, protects your boundaries, and guides you toward sustainable productivity.</p>
            <p className="mb-8 text-gray-700">The otter symbolizes peace, playfulness, and flow—exactly the energy we want to bring to your work. Otto is always there when you need guidance, but never intrusive. Think of him as your wise, calm companion in the chaotic world of tasks and deadlines.</p>
            <div className="bg-teal-50 rounded-2xl p-6 border-2 border-teal-200">
              <p className="text-lg italic text-gray-900">"With Otto by your side, you'll never feel alone in managing your workload. He's like having a productivity coach, wellness advisor, and accountability partner—all in one."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="container text-center">
          <h2 className="text-white mb-6 text-2xl">Ready to Work Smarter?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">Experience a productivity system that actually cares about your wellbeing</p>
          <button className="bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold">Start Free Trial</button>
        </div>
      </section>
    </div>
  )
}
