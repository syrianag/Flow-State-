export default function HomePage() {
  return (
    <div className="min-h-screen bg-charcoal text-soft-white">
      {/* Hero Section (styled to match Who Benefits Most) */}
      <section className="hero-wrap bg-gradient-to-br from-sage/8 to-teal/8">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="hero-title">Flow State</h1>
          <p className="hero-sub">Stop the burnout cycle. Plan smarter, not harder.</p>
          <p className="hero-desc">The productivity system that actually gets you—helping you plan around real energy, break down big tasks, and finish strong without burning out.</p>
          <a href="/product" className="cta-button">Try Flow State →</a>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="bg-gradient-to-br from-sage/8 to-teal/8 py-16 my-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-soft-white mb-12">Who Benefits Most?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="benefit-section">
                <h3 className="benefit-header">Students</h3>
                <div className="bullet-container">
                  <div className="bullet-item">
                    <div className="diamond"></div>
                    <p className="bullet-text">Balancing classes, deadlines, work, and life?</p>
                  </div>
                  <div className="bullet-item">
                    <div className="diamond"></div>
                    <p className="bullet-text">Stop overloading your schedule and start finishing what matters—without the all-nighters and stress spirals.</p>
                  </div>
                </div>
              </div>

              <div className="benefit-section mt-10">
                <h3 className="benefit-header">Early-Career Professionals</h3>
                <div className="bullet-container">
                  <div className="bullet-item">
                    <div className="diamond"></div>
                    <p className="bullet-text">New to the working world?</p>
                  </div>
                  <div className="bullet-item">
                    <div className="diamond"></div>
                    <p className="bullet-text">Figure out your real capacity, protect your energy, and show up consistently.</p>
                  </div>
                  <div className="bullet-item">
                    <div className="diamond"></div>
                    <p className="bullet-text">Build a reputation without burning out.</p>
                  </div>
                </div>
              </div>

              <div className="benefit-section mt-10">
                <h3 className="benefit-header">Freelancers</h3>
                <div className="bullet-container">
                  <div className="bullet-item">
                    <div className="diamond"></div>
                    <p className="bullet-text">Managing multiple clients and projects simultaneously.</p>
                  </div>
                  <div className="bullet-item">
                    <div className="diamond"></div>
                    <p className="bullet-text">Prevent overcommitment by seeing your real capacity.</p>
                  </div>
                  <div className="bullet-item">
                    <div className="diamond"></div>
                    <p className="bullet-text">Say yes to the right work and no to burnout.</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-soft-white mb-4">How Flow State Works</h2>
        <p className="text-lg text-gray text-center max-w-4xl mx-auto mb-12 leading-relaxed">Flow State combines a short daily check-in, capacity-aware planning rules, and focused work sessions to produce realistic daily plans. Instead of asking you to estimate large, vague blocks of work, it emphasizes clarity, honesty, and energy awareness.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          <div className="bg-card-dark p-8 rounded-2xl border-l-4 border-sage shadow-lg hover:-translate-y-0.5 hover:shadow-2xl transition-all">
            <h3 className="text-xl font-semibold text-soft-white mb-3">Daily Check-In</h3>
            <p className="text-gray leading-relaxed">Quick check-ins (minutes available, energy level, stress level) calculate your realistic capacity for the day—not what you wish you could do, but what you actually can.</p>
          </div>

          <div className="bg-card-dark p-8 rounded-2xl border-l-4 border-teal shadow-lg hover:-translate-y-0.5 hover:shadow-2xl transition-all">
            <h3 className="text-xl font-semibold text-soft-white mb-3">Capacity Gate</h3>
            <p className="text-gray leading-relaxed">A hard limit prevents scheduling more work than your plan budget. If you try to overcommit, the system pushes back and asks you to shrink, defer, or drop tasks.</p>
          </div>

          <div className="bg-card-dark p-8 rounded-2xl border-l-4 border-sage shadow-lg hover:-translate-y-0.5 hover:shadow-2xl transition-all">
            <h3 className="text-xl font-semibold text-soft-white mb-3">Recovery Mode</h3>
            <p className="text-gray leading-relaxed">On low-energy or high-stress days, Recovery Mode automatically reduces expectations, increases buffer time, and suggests smaller, achievable tasks.</p>
          </div>

          <div className="bg-card-dark p-8 rounded-2xl border-l-4 border-teal shadow-lg hover:-translate-y-0.5 hover:shadow-2xl transition-all">
            <h3 className="text-xl font-semibold text-soft-white mb-3">Next Action Enforcement</h3>
            <p className="text-gray leading-relaxed">Tasks can't be scheduled unless they have a clear next action. This kills procrastination by making every task immediately actionable.</p>
          </div>

          <div className="bg-card-dark p-8 rounded-2xl border-l-4 border-sage shadow-lg hover:-translate-y-0.5 hover:shadow-2xl transition-all">
            <h3 className="text-xl font-semibold text-soft-white mb-3">Focus Blocks</h3>
            <p className="text-gray leading-relaxed">Start timed focus sessions tied to tasks. Real time spent is logged automatically, keeping your estimates honest and your plan budget accurate.</p>
          </div>

          <div className="bg-card-dark p-8 rounded-2xl border-l-4 border-teal shadow-lg hover:-translate-y-0.5 hover:shadow-2xl transition-all">
            <h3 className="text-xl font-semibold text-soft-white mb-3">AI Task Shaper</h3>
            <p className="text-gray leading-relaxed">Turn vague tasks into schedulable work. The AI suggests next actions, estimates, energy cost, a Definition of Done, and a minimum viable version for tired days.</p>
          </div>
        </div>
      </section>

      {/* Why It Helps Section */}
      <section className="bg-gradient-to-br from-teal/8 to-sage/8 py-16 my-12">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-soft-white mb-6">Why It Helps</h2>
          <p className="text-xl text-gray leading-relaxed mb-8">Users get plans that match real-life energy and time, which reduces overcommitment, procrastination, and burnout while improving output quality.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <span className="bg-card-dark px-6 py-3 rounded-full text-sage font-medium border border-sage/30 shadow-md hover:border-sage/60 hover:-translate-y-0.5 transition-all">Reduces overcommitment</span>
            <span className="bg-card-dark px-6 py-3 rounded-full text-sage font-medium border border-sage/30 shadow-md hover:border-sage/60 hover:-translate-y-0.5 transition-all">Prevents procrastination</span>
            <span className="bg-card-dark px-6 py-3 rounded-full text-sage font-medium border border-sage/30 shadow-md hover:border-sage/60 hover:-translate-y-0.5 transition-all">Protects against burnout</span>
            <span className="bg-card-dark px-6 py-3 rounded-full text-sage font-medium border border-sage/30 shadow-md hover:border-sage/60 hover:-translate-y-0.5 transition-all">Improves work quality</span>
            <span className="bg-card-dark px-6 py-3 rounded-full text-sage font-medium border border-sage/30 shadow-md hover:border-sage/60 hover:-translate-y-0.5 transition-all">Builds realistic planning skills</span>
            <span className="bg-card-dark px-6 py-3 rounded-full text-sage font-medium border border-sage/30 shadow-md hover:border-sage/60 hover:-translate-y-0.5 transition-all">Adapts to your energy</span>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-7xl mx-auto px-8 py-20 text-center">
        <h2 className="text-4xl font-bold text-soft-white mb-4">Ready to plan realistically?</h2>
        <p className="text-lg text-gray mb-8">Start using Flow State today and stop the overcommit-crash cycle.</p>
        <a href="/product" className="inline-block bg-teal text-soft-white px-10 py-4 text-lg font-semibold rounded-xl hover:bg-teal/80 transition-all hover:-translate-y-0.5 shadow-lg shadow-teal/30 hover:shadow-xl hover:shadow-teal/40">Get Started →</a>
      </section>
    </div>
  )
}

