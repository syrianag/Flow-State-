import { Heart, Users, Target, Lightbulb } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-charcoal text-soft-white">
      {/* HERO - large centered title + subtitle */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h1 className="text-6xl font-extrabold leading-tight mb-6">About Flow State</h1>
          <p className="text-xl text-gray max-w-3xl mx-auto">We believe that true productivity isn't about working harder—it's about working in harmony with your natural energy and capacity.</p>
        </div>
      </section>

      {/* MISSION - two column: text left, image right */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray mb-4">Flow State was born from a simple observation: most productivity tools push you to do more, but rarely help you sustain it. We saw talented professionals burning out, brilliant students overwhelmed, and passionate creators losing their spark.</p>
              <p className="text-lg text-gray mb-4">We built Flow State to change that narrative. Our mission is to help you achieve your goals while maintaining your wellbeing, energy, and passion for your work.</p>
              <p className="text-lg text-gray">With Otto, our AI companion, we've created a system that doesn't just track what you do—it actively protects you from overcommitment and guides you toward sustainable success.</p>
            </div>

            <div>
              {/* Photo removed per request; keep a neutral placeholder to preserve layout */}
              <div className="w-full rounded-3xl shadow-2xl bg-card-dark h-48 flex items-center justify-center">
                <span className="text-gray">(photo removed)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES - centered heading, 4 column values */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray max-w-3xl mx-auto">These principles guide every feature we build and every decision we make.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-[rgba(91,138,154,0.08)]">
                <Heart size={28} style={{ color: 'var(--teal)' }} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Wellbeing First</h4>
              <p className="text-gray">Your mental and physical health always comes before productivity metrics.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-[rgba(122,155,119,0.08)]">
                <Target size={28} style={{ color: 'var(--sage)' }} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Sustainable Growth</h4>
              <p className="text-gray">Progress that lasts is built on consistency, not burnout-inducing sprints.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-[rgba(91,138,154,0.08)]">
                <Lightbulb size={28} style={{ color: 'var(--teal)' }} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Intelligent Adaptation</h4>
              <p className="text-gray">Our AI learns your patterns and adapts to support you where you need it most.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-[rgba(122,155,119,0.08)]">
                <Users size={28} style={{ color: 'var(--sage)' }} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Community Focus</h4>
              <p className="text-gray">Built with feedback from real users facing real productivity challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM / TESTIMONIAL */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-6">Built by People Who Get It</h2>
          <p className="text-lg text-gray max-w-3xl mx-auto mb-8">Our team has experienced the cycle of productivity and burnout firsthand. We've been the overcommitted developer, the overwhelmed student, the creator who lost their creative spark. Flow State is the tool we wished we had.</p>

            <div className="mx-auto max-w-3xl bg-card-dark rounded-2xl p-8 border border-sage/20">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-teal to-sage text-4xl">🦦</div>
            </div>
            <p className="text-lg italic text-gray">"We're not just building a productivity app. We're creating a companion that helps you work at your best while staying healthy, energized, and passionate about what you do."</p>
            <p className="mt-4 font-semibold" style={{ color: 'var(--teal)' }}>— The Flow State Team</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-card-dark to-charcoal">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-soft-white">Join Our Journey</h2>
          <p className="text-lg text-gray mb-8">Be part of a community that values sustainable productivity and wellbeing.</p>
          <button className="cta-button">Get Started Today</button>
        </div>
      </section>
    </div>
  )
}
