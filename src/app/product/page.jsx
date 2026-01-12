import Link from 'next/link'
import { getServerAuthSession } from "../../lib/auth";
import { isStaff } from "../../lib/authz";
import ProductTimerDemo from "./ProductTimerDemo";
import CapacityGateDemo from "./CapacityGateDemo";
import "../../styles/home.css";

export default async function ProductPage() {
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
      <section className="hero">
        <div className="hero-content">
          <h1>How Flow State Works</h1>
          <p className="hero-description">A complete system designed to keep you productive, focused, and energized—without the burnout</p>
        </div>
      </section>

      {/* Smart Planning Section */}
      <section className="ai-powered-section">
        <div className="ai-powered-container">
          <div className="ai-powered-subtitle">BURNOUT PROTECTION</div>
          <h2 className="ai-powered-title">The Capacity Gate</h2>
          <p className="ai-powered-description">
            Stop the "my schedule lies" cycle. Flow State enforces a hard cap on planned work based on your daily capacity check-in. 
            This is your core burnout-protection mechanism—Otto literally won't let you overcommit.
          </p>
          
          <div style={{ background: 'rgba(79,209,197,0.1)', borderLeft: '4px solid #4fd1c5', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
            <h4 style={{ color: '#4fd1c5', fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.75rem' }}>How it works:</h4>
            <ul style={{ color: '#e2e8f0', fontSize: '1rem', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: '#4fd1c5' }}>✓</span>
                Every morning, check-in calculates: <strong>Capacity - Buffer = Plan Budget</strong>
              </li>
              <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: '#4fd1c5' }}>✓</span>
                You cannot add tasks that exceed your plan budget
              </li>
              <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: '#4fd1c5' }}>✓</span>
                The system validates capacity on both UI and API level
              </li>
              <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: '#4fd1c5' }}>✓</span>
                Your remaining budget updates instantly as you add or remove tasks
              </li>
            </ul>
          </div>

          <CapacityGateDemo />

          <div style={{ background: 'rgba(79,209,197,0.1)', borderLeft: '4px solid #4fd1c5', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
            <p style={{ color: '#e2e8f0', fontSize: '1.1rem', lineHeight: '1.7' }}>
              Try the demo above! Notice how the system pushes back when you try to add too much. 
              This isn't about being restrictive—it's about being <strong>honest with yourself</strong> and 
              preventing the crash-and-burn cycle.
            </p>
          </div>
        </div>
      </section>

      {/* AI Planning Section */}
      <section className="ai-powered-section" style={{ background: 'linear-gradient(135deg, #1a2733, #2d4a5a)' }}>
        <div className="ai-powered-container">
          <div className="ai-powered-subtitle">SMART PLANNING</div>
          <h2 className="ai-powered-title">AI-Powered Daily Planning</h2>
          <p className="ai-powered-description">
            Every morning, Otto helps you plan your day by analyzing your capacity, energy levels, and upcoming commitments. Connect your Google Calendar, and Otto creates the optimal schedule that respects your limits.
          </p>
          
          <div className="ai-stats-grid">
            <div className="ai-stat-item">
              <div className="text-4xl mb-4">📅</div>
              <h4 className="text-xl font-semibold mb-3" style={{ color: '#4fd1c5' }}>Calendar Integration</h4>
              <p className="ai-stat-label">Syncs with Google Calendar for smart scheduling</p>
            </div>

            <div className="ai-stat-item">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="text-xl font-semibold mb-3" style={{ color: '#4fd1c5' }}>Capacity Protection</h4>
              <p className="ai-stat-label">Prevents task overload automatically</p>
            </div>

            <div className="ai-stat-item">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-semibold mb-3" style={{ color: '#4fd1c5' }}>Energy Analysis</h4>
              <p className="ai-stat-label">Learns your peak productivity times</p>
            </div>
          </div>

          <div style={{ background: 'rgba(79,209,197,0.1)', borderLeft: '4px solid #4fd1c5', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
            <p style={{ color: '#e2e8f0', fontSize: '1.1rem', lineHeight: '1.7' }}>Unlike traditional planners, Flow State actively prevents overcommitment. The Capacity Gate ensures you never take on more than you can sustainably handle.</p>
          </div>
        </div>
      </section>

      {/* Focus Tracking Section */}
      <section className="ai-powered-section" style={{ background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)' }}>
        <div className="ai-powered-container">
          <div className="ai-powered-subtitle">FOCUS TRACKING</div>
          <h2 className="ai-powered-title">Focus Blocks That Actually Work</h2>
          <p className="ai-powered-description">
            Each task gets dedicated focus time with built-in timers and progress tracking. The app feels "alive" as it monitors your work and provides real-time feedback to improve your planning.
          </p>

          <ProductTimerDemo />

          <div style={{ background: 'rgba(79,209,197,0.1)', borderLeft: '4px solid #4fd1c5', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
            <p style={{ color: '#e2e8f0', fontSize: '1.1rem', lineHeight: '1.7' }}>Time data flows back into Otto's planning algorithm, helping you get better at estimating how long things actually take—not how long you wish they took.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
