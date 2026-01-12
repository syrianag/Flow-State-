import { AlertCircle, TrendingUp, Battery, Brain, Clock, Target } from 'lucide-react'
import Link from "next/link";
import { getServerAuthSession } from "../../lib/auth";
import { isStaff } from "../../lib/authz";
import "../../styles/home.css";

export default async function WhyPage() {
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

          {showStaff && (
            <>
              <li><Link href="/rubric" className="nav-link">Rubric</Link></li>
              <li><Link href="/reflection" className="nav-link">Reflection</Link></li>
            </>
          )}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '60vh', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="hero-content" style={{ maxWidth: '800px' }}>
          <h1>Why Flow State?</h1>
          <p className="hero-description">
            Because traditional productivity tools are breaking us. It's time for a different approach.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="ai-powered-section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="ai-powered-container">
          <div className="ai-powered-subtitle" style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444' }}>
            <AlertCircle size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
            THE PROBLEM
          </div>
          <h2 className="ai-powered-title">
            Most Productivity Tools <span className="gradient-text">Make Things Worse</span>
          </h2>

          <div className="ai-stats-grid" style={{ gap: '1.5rem', marginBottom: '0' }}>
            <div className="ai-feature-card" style={{ borderLeft: '4px solid #ef4444', padding: '1.5rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '0.75rem' }}>They encourage overcommitment</h3>
              <p className="ai-stat-label">
                Adding "just one more task" seems harmless until you're drowning in commitments. 
                Most apps let you pile on unlimited tasks without considering your actual capacity.
              </p>
            </div>

            <div className="ai-feature-card" style={{ borderLeft: '4px solid #ef4444', padding: '1.5rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '0.75rem' }}>They don't adapt to your energy</h3>
              <p className="ai-stat-label">
                When you're running on empty, the last thing you need is a rigid system demanding 
                the same output as when you're fresh. Yet that's exactly what most tools do.
              </p>
            </div>

            <div className="ai-feature-card" style={{ borderLeft: '4px solid #ef4444', padding: '1.5rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '0.75rem' }}>They enable procrastination</h3>
              <p className="ai-stat-label">
                Vague tasks like "work on project" give you an excuse to avoid starting. You need 
                clarity, but most tools accept anything you type.
              </p>
            </div>

            <div className="ai-feature-card" style={{ borderLeft: '4px solid #ef4444', padding: '1.5rem' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '0.75rem' }}>They measure activity, not wellbeing</h3>
              <p className="ai-stat-label">
                Checking off 20 tasks while spiraling into burnout isn't success—it's unsustainable. 
                But traditional tools treat all completion as equal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="ai-powered-section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="ai-powered-container">
          <div className="ai-powered-subtitle">
            <TrendingUp size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
            THE SOLUTION
          </div>
          <h2 className="ai-powered-title">
            Flow State Does Things <span className="gradient-text">Differently</span>
          </h2>

          <div className="ai-stats-grid" style={{ gap: '1.5rem' }}>
            <div className="ai-stat-item" style={{ padding: '1.5rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <Battery size={36} style={{ color: '#14b8a6' }} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: '#14b8a6', marginBottom: '0.75rem', fontWeight: '600' }}>
                Capacity Protection
              </h4>
              <p className="ai-stat-label">
                Our Capacity Gate actively prevents you from taking on more than you can handle. 
                It's like having a wise friend who says "maybe that can wait."
              </p>
            </div>

            <div className="ai-stat-item" style={{ padding: '1.5rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <Brain size={36} style={{ color: '#10b981' }} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: '#10b981', marginBottom: '0.75rem', fontWeight: '600' }}>
                Intelligent Adaptation
              </h4>
              <p className="ai-stat-label">
                Recovery Mode detects when you're struggling and automatically adjusts expectations. 
                It works with your energy, not against it.
              </p>
            </div>

            <div className="ai-stat-item" style={{ padding: '1.5rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <Target size={36} style={{ color: '#14b8a6' }} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: '#14b8a6', marginBottom: '0.75rem', fontWeight: '600' }}>
                Anti-Procrastination
              </h4>
              <p className="ai-stat-label">
                Next Action Enforcement ensures every task has a clear, immediate entry point. 
                No more vague to-dos that sit untouched for weeks.
              </p>
            </div>

            <div className="ai-stat-item" style={{ padding: '1.5rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <Clock size={36} style={{ color: '#10b981' }} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: '#10b981', marginBottom: '0.75rem', fontWeight: '600' }}>
                Real-Time Feedback
              </h4>
              <p className="ai-stat-label">
                Focus Blocks track actual time spent and give you live feedback to improve your 
                planning and stay motivated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Impact */}
      <section className="ai-powered-section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="ai-powered-container">
          <h2 className="ai-powered-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>The Real Impact</h2>

          <div className="ai-stats-grid" style={{ marginBottom: '2rem' }}>
            <div className="ai-stat-item" style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div className="ai-stat-value">85%</div>
              <div className="ai-stat-label" style={{ fontWeight: '600', fontSize: '1rem', marginBottom: '0.5rem' }}>
                Reduction in burnout
              </div>
              <p className="ai-stat-label" style={{ fontSize: '0.875rem' }}>
                Users report significantly lower stress levels after 30 days
              </p>
            </div>

            <div className="ai-stat-item" style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div className="ai-stat-value">3x</div>
              <div className="ai-stat-label" style={{ fontWeight: '600', fontSize: '1rem', marginBottom: '0.5rem' }}>
                Better focus duration
              </div>
              <p className="ai-stat-label" style={{ fontSize: '0.875rem' }}>
                Users maintain deep work sessions 3x longer on average
              </p>
            </div>

            <div className="ai-stat-item" style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div className="ai-stat-value">92%</div>
              <div className="ai-stat-label" style={{ fontWeight: '600', fontSize: '1rem', marginBottom: '0.5rem' }}>
                Task completion rate
              </div>
              <p className="ai-stat-label" style={{ fontSize: '0.875rem' }}>
                Higher completion than traditional to-do apps
              </p>
            </div>
          </div>

          <div className="ai-feature-card" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #14b8a6 0%, #10b981 100%)', fontSize: '2.5rem', flexShrink: 0 }}>
                🦦
              </div>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <h4 style={{ fontSize: '1.25rem', color: '#14b8a6', marginBottom: '0.5rem', fontWeight: '700' }}>
                  Meet Otto: Your AI Productivity Partner
                </h4>
                <p className="ai-powered-description" style={{ marginBottom: 0, fontSize: '1rem' }}>
                  Otto isn't just a chatbot—he's an intelligent system that learns your patterns, 
                  protects your capacity, and guides you toward sustainable productivity. He represents 
                  peace and calmness in a chaotic world of endless tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="hero-content">
          <h2 className="hero-subtitle">Experience the Difference</h2>
          <p className="hero-description">
            Stop fighting burnout. Start working with your energy, not against it.
          </p>
          <div className="hero-buttons">
            <Link href="/product" className="primary-button">
              <span className="button-icon">🦦</span>
              <span>Try Flow State Free</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
