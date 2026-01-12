// src/app/page.jsx
import "../styles/home.css";
import Link from "next/link";
import { getServerAuthSession } from "../lib/auth";
import { isStaff } from "../lib/authz";

export default async function HomePage() {
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

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Flow State</h1>
          <p className="hero-subtitle">Stop the burnout cycle. Plan smarter, not harder.</p>
          <p className="hero-description">
            The productivity system that actually gets you—helping you plan around real energy, break down big tasks,
            and finish strong without burning out.
          </p>

          <div className="hero-buttons">
            <Link href="/product" className="primary-button">
              <span className="button-icon">🦦</span>
              <span>Try Flow State</span>
            </Link>
          </div>

          <div className="staff-portal">
            <Link href={session ? "/staff" : "/login?callbackUrl=/staff"} className="staff-button">
              Staff Portal
            </Link>
            <p className="staff-subtitle">For instructors & coaches</p>
          </div>
        </div>
      </section>

      {/* AI-Powered Productivity Section */}
      <section className="ai-powered-section">
        <div className="ai-powered-container">
          <div className="ai-powered-subtitle">AI-POWERED PRODUCTIVITY</div>
          <h2 className="ai-powered-title">
            Work Smarter, <span className="gradient-text">Not Harder</span>
          </h2>
          <p className="ai-powered-description">
            Flow State helps you maintain peak productivity while preventing burnout. Let Otto, your AI companion,
            guide you to sustainable success.
          </p>
          <div className="ai-powered-buttons">
            <Link href="/product" className="btn-ai-primary">
              Get Started Free →
            </Link>
            <Link href="/features" className="btn-ai-secondary">
              See How It Works
            </Link>
          </div>
        </div>

        <div className="ai-hero-image">
          <span>Workspace Image</span>
        </div>

        {/* Stats Grid */}
        <div className="ai-stats-grid">
          <div className="ai-stat-item">
            <div className="ai-stat-value">95%</div>
            <div className="ai-stat-label">Less Burnout</div>
          </div>
          <div className="ai-stat-item">
            <div className="ai-stat-value">3x</div>
            <div className="ai-stat-label">Better Focus</div>
          </div>
          <div className="ai-stat-item">
            <div className="ai-stat-value">92%</div>
            <div className="ai-stat-label">Task Completion</div>
          </div>
          <div className="ai-stat-item">
            <div className="ai-stat-value">50%</div>
            <div className="ai-stat-label">More Recovery</div>
          </div>
        </div>

        {/* Features Section */}
        <div className="ai-features-section">
          <h2 className="ai-features-title">Everything You Need to Stay in Flow</h2>
          <p className="ai-features-subtitle">
            Intelligent features that adapt to your energy levels and help you work at your best
          </p>

          <div className="ai-feature-card">
            <div className="ai-feature-icon">🛡️</div>
            <h3>Capacity Gate</h3>
            <p>Prevents task overload by enforcing daily and weekly limits based on your capacity</p>
          </div>

          <div className="ai-feature-card">
            <div className="ai-feature-icon">⏰</div>
            <h3>Recovery Mode</h3>
            <p>Automatically reduces expectations when signs of burnout are detected</p>
          </div>

          <div className="ai-feature-card">
            <div className="ai-feature-icon">🎯</div>
            <h3>Next Action</h3>
            <p>Eliminates procrastination by requiring specific, actionable tasks</p>
          </div>

          <div className="ai-feature-card">
            <div className="ai-feature-icon">⚡</div>
            <h3>Focus Blocks</h3>
            <p>Time tracking tied to tasks with live progress feedback</p>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="benefits">
        <h2>Who Benefits Most?</h2>

        <div className="benefits-circles">
          <div className="benefit-circle circle-1">
            <h3>Students</h3>
            <p>Balancing classes, deadlines, work, and life? Stop overloading your schedule and start finishing what matters—without the all-nighters and stress spirals.</p>
          </div>

          <div className="benefit-circle circle-2">
            <h3>Early-Career Professionals</h3>
            <p>New to the working world? Figure out your real capacity, protect your energy, and show up consistently. Build a reputation without burning out.</p>
          </div>

          <div className="benefit-circle circle-3">
            <h3>Freelancers</h3>
            <p>Juggling multiple clients and projects? Manage your workload without overcommitting. Protect your energy while maintaining steady income.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
