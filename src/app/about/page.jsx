import { Heart, Users, Target, Lightbulb } from 'lucide-react'
import "../../styles/home.css";
import Link from "next/link";
import { getServerAuthSession } from "../../lib/auth";
import { isStaff } from "../../lib/authz";

export default async function AboutPage() {
  const session = await getServerAuthSession();
  const showStaff = isStaff(session);

  return (
    <div className="landing">
      {/* Navigation */}
      <nav className="top-nav">
        <div className="logo-container">
          <div className="logo">🦦</div>
          <span className="brand-name">Flow State</span>
        </div>

        <ul className="nav-links">
          <li><Link href="/" className="nav-link">Home</Link></li>
          <li><Link href="/about" className="nav-link">About</Link></li>
          <li><Link href="/why" className="nav-link">Why Flow State?</Link></li>
          <li><Link href="/product" className="nav-link">Product</Link></li>
          <li><Link href="/features" className="nav-link">Features</Link></li>

          {/* Staff-only links: only show when staff is signed in */}
          {showStaff && (
            <>
              <li><Link href="/rubric" className="nav-link">Rubric</Link></li>
              <li><Link href="/reflection" className="nav-link">Reflection</Link></li>
            </>
          )}
        </ul>
      </nav>

      {/* HERO - large centered title + subtitle */}
      <section className="hero">
        <div className="hero-content">
          <h1>About Flow State</h1>
          <p className="hero-description">We believe that true productivity isn't about working harder—it's about working in harmony with your natural energy and capacity.</p>
        </div>
      </section>

      {/* MISSION - two column: text left, image right */}
      <section className="ai-powered-section">
        <div className="ai-powered-container">
          <div className="ai-powered-subtitle">OUR MISSION</div>
          <h2 className="ai-powered-title">
            Built to Change the <span className="gradient-text">Productivity Narrative</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <p className="ai-powered-description" style={{ marginBottom: '1.5rem' }}>Flow State was born from a simple observation: most productivity tools push you to do more, but rarely help you sustain it. We saw talented professionals burning out, brilliant students overwhelmed, and passionate creators losing their spark.</p>
              <p className="ai-powered-description" style={{ marginBottom: '1.5rem' }}>We built Flow State to change that narrative. Our mission is to help you achieve your goals while maintaining your wellbeing, energy, and passion for your work.</p>
              <p className="ai-powered-description">With Otto, our AI companion, we've created a system that doesn't just track what you do—it actively protects you from overcommitment and guides you toward sustainable success.</p>
            </div>

            <div>
              {/* Photo removed per request; keep a neutral placeholder to preserve layout */}
              <div className="ai-hero-image" style={{ height: '300px' }}>
                <span>(photo removed)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES - centered heading, 4 column values */}
      <section className="ai-powered-section" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' }}>
        <div className="ai-powered-container">
          <h2 className="ai-powered-title" style={{ textAlign: 'center' }}>Our Core Values</h2>
          <p className="ai-powered-description" style={{ textAlign: 'center', margin: '0 auto 3rem' }}>These principles guide every feature we build and every decision we make.</p>

          <div className="ai-stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="ai-stat-item" style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '80px', height: '80px', margin: '0 auto 1rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(91,138,154,0.08)' }}>
                <Heart size={28} style={{ color: '#14b8a6' }} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#14b8a6' }}>Wellbeing First</h4>
              <p className="ai-stat-label">Your mental and physical health always comes before productivity metrics.</p>
            </div>

            <div className="ai-stat-item" style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '80px', height: '80px', margin: '0 auto 1rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(122,155,119,0.08)' }}>
                <Target size={28} style={{ color: '#10b981' }} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#10b981' }}>Sustainable Growth</h4>
              <p className="ai-stat-label">Progress that lasts is built on consistency, not burnout-inducing sprints.</p>
            </div>

            <div className="ai-stat-item" style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '80px', height: '80px', margin: '0 auto 1rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(91,138,154,0.08)' }}>
                <Lightbulb size={28} style={{ color: '#14b8a6' }} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#14b8a6' }}>Intelligent Adaptation</h4>
              <p className="ai-stat-label">Our AI learns your patterns and adapts to support you where you need it most.</p>
            </div>

            <div className="ai-stat-item" style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '80px', height: '80px', margin: '0 auto 1rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(122,155,119,0.08)' }}>
                <Users size={28} style={{ color: '#10b981' }} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#10b981' }}>Community Focus</h4>
              <p className="ai-stat-label">Built with feedback from real users facing real productivity challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM / TESTIMONIAL */}
      <section className="ai-powered-section">
        <div className="ai-powered-container" style={{ textAlign: 'center' }}>
          <h2 className="ai-powered-title">Built by People Who Get It</h2>
          <p className="ai-powered-description" style={{ margin: '0 auto 3rem' }}>Our team has experienced the cycle of productivity and burnout firsthand. We've been the overcommitted developer, the overwhelmed student, the creator who lost their creative spark. Flow State is the tool we wished we had.</p>

          <div className="ai-feature-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #14b8a6 0%, #10b981 100%)', fontSize: '2.5rem' }}>🦦</div>
            </div>
            <p className="ai-powered-description" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"We're not just building a productivity app. We're creating a companion that helps you work at your best while staying healthy, energized, and passionate about what you do."</p>
            <p style={{ fontWeight: '600', color: '#14b8a6' }}>— The Flow State Team</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="hero-content">
          <h2 className="hero-subtitle">Join Our Journey</h2>
          <p className="hero-description">Be part of a community that values sustainable productivity and wellbeing.</p>
          <div className="hero-buttons">
            <button className="primary-button">
              <span className="button-icon">🦦</span>
              <span>Get Started Today</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
