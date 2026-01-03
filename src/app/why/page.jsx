import { AlertCircle, TrendingUp, Battery, Brain, Clock, Target } from 'lucide-react'

export default function WhyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-sage-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6" style={{ color: 'var(--color-charcoal)' }}>
              Why Flow State?
            </h1>
            <p className="text-xl" style={{ color: 'var(--color-gray)' }}>
              Because traditional productivity tools are breaking us. It's time for a different approach.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full mb-6">
                <AlertCircle size={20} />
                <span style={{ fontWeight: 600 }}>The Problem</span>
              </div>
              <h2 className="mb-6" style={{ color: 'var(--color-charcoal)' }}>
                Most Productivity Tools Make Things Worse
              </h2>
            </div>

            <div className="space-y-6">
              <div className="card border-l-4 border-red-400">
                <h4 className="mb-3" style={{ color: 'var(--color-charcoal)' }}>
                  They encourage overcommitment
                </h4>
                <p>
                  Adding "just one more task" seems harmless until you're drowning in commitments. 
                  Most apps let you pile on unlimited tasks without considering your actual capacity.
                </p>
              </div>

              <div className="card border-l-4 border-red-400">
                <h4 className="mb-3" style={{ color: 'var(--color-charcoal)' }}>
                  They don't adapt to your energy
                </h4>
                <p>
                  When you're running on empty, the last thing you need is a rigid system demanding 
                  the same output as when you're fresh. Yet that's exactly what most tools do.
                </p>
              </div>

              <div className="card border-l-4 border-red-400">
                <h4 className="mb-3" style={{ color: 'var(--color-charcoal)' }}>
                  They enable procrastination
                </h4>
                <p>
                  Vague tasks like "work on project" give you an excuse to avoid starting. You need 
                  clarity, but most tools accept anything you type.
                </p>
              </div>

              <div className="card border-l-4 border-red-400">
                <h4 className="mb-3" style={{ color: 'var(--color-charcoal)' }}>
                  They measure activity, not wellbeing
                </h4>
                <p>
                  Checking off 20 tasks while spiraling into burnout isn't success—it's unsustainable. 
                  But traditional tools treat all completion as equal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full mb-6">
                <TrendingUp size={20} />
                <span style={{ fontWeight: 600 }}>The Solution</span>
              </div>
              <h2 className="mb-6" style={{ color: 'var(--color-charcoal)' }}>
                Flow State Does Things Differently
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card bg-white">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Battery className="text-teal-600" size={24} />
                </div>
                <h4 className="mb-3" style={{ color: 'var(--color-charcoal)' }}>
                  Capacity Protection
                </h4>
                <p>
                  Our Capacity Gate actively prevents you from taking on more than you can handle. 
                  It's like having a wise friend who says "maybe that can wait."
                </p>
              </div>

              <div className="card bg-white">
                <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="text-sage-700" size={24} />
                </div>
                <h4 className="mb-3" style={{ color: 'var(--color-charcoal)' }}>
                  Intelligent Adaptation
                </h4>
                <p>
                  Recovery Mode detects when you're struggling and automatically adjusts expectations. 
                  It works with your energy, not against it.
                </p>
              </div>

              <div className="card bg-white">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-teal-600" size={24} />
                </div>
                <h4 className="mb-3" style={{ color: 'var(--color-charcoal)' }}>
                  Anti-Procrastination
                </h4>
                <p>
                  Next Action Enforcement ensures every task has a clear, immediate entry point. 
                  No more vague to-dos that sit untouched for weeks.
                </p>
              </div>

              <div className="card bg-white">
                <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="text-sage-700" size={24} />
                </div>
                <h4 className="mb-3" style={{ color: 'var(--color-charcoal)' }}>
                  Real-Time Feedback
                </h4>
                <p>
                  Focus Blocks track actual time spent and give you live feedback to improve your 
                  planning and stay motivated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Impact */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12" style={{ color: 'var(--color-charcoal)' }}>
              The Real Impact
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl mb-4" style={{ color: 'var(--color-teal)', fontWeight: 700 }}>
                  85%
                </div>
                <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>
                  Reduction in burnout
                </p>
                <p className="text-sm mt-2">
                  Users report significantly lower stress levels after 30 days
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4" style={{ color: 'var(--color-teal)', fontWeight: 700 }}>
                  3x
                </div>
                <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>
                  Better focus duration
                </p>
                <p className="text-sm mt-2">
                  Users maintain deep work sessions 3x longer on average
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4" style={{ color: 'var(--color-teal)', fontWeight: 700 }}>
                  92%
                </div>
                <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>
                  Task completion rate
                </p>
                <p className="text-sm mt-2">
                  Higher completion than traditional to-do apps
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-sage-50 rounded-2xl p-8 border-2 border-teal-200">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-5xl">🦦</span>
                </div>
                <div>
                  <h4 className="mb-3" style={{ color: 'var(--color-charcoal)' }}>
                    Meet Otto: Your AI Productivity Partner
                  </h4>
                  <p>
                    Otto isn't just a chatbot—he's an intelligent system that learns your patterns, 
                    protects your capacity, and guides you toward sustainable productivity. He represents 
                    peace and calmness in a chaotic world of endless tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="container text-center">
          <h2 className="text-white mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Stop fighting burnout. Start working with your energy, not against it.
          </p>
          <button className="bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors" style={{ fontWeight: 600 }}>
            Try Flow State Free
          </button>
        </div>
      </section>
    </div>
  );
}
