"use client"

import { useState } from 'react'
import { Shield, Activity, Target, Timer, Calendar, Check, Play, Pause } from 'lucide-react'
import Link from "next/link";
import { getServerAuthSession } from "../../lib/auth";
import { isStaff } from "../../lib/authz";
import "../../styles/home.css";

export default function Features() {
  const [activeDemo, setActiveDemo] = useState(null)

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
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '60vh', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="hero-content">
          <h1>Features Built for Sustainable Success</h1>
          <p className="hero-description">
            Every feature is designed with one goal: help you achieve more while maintaining your wellbeing
          </p>
        </div>
      </section>

      {/* Feature 1: Capacity Gate */}
      <section className="ai-powered-section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="ai-powered-container">
          <div className="flex items-center gap-4 mb-8">
            <div style={{ width: '64px', height: '64px', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Shield style={{ color: '#14b8a6' }} size={32} />
            </div>
            <div>
              <h2 className="ai-powered-title" style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Capacity Gate</h2>
              <p className="ai-powered-description" style={{ marginBottom: 0 }}>Your guardian against overcommitment</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            <div>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '500', color: '#ffffff' }}>What it does:</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#14b8a6', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                  <span>Monitors your daily and weekly capacity limits</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#14b8a6', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                  <span>Prevents you from adding tasks when you're at capacity</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#14b8a6', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                  <span>Suggests alternatives when you try to overcommit</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#14b8a6', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                  <span>Learns your actual capacity over time</span>
                </li>
              </ul>

              <div style={{ marginTop: '1.5rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '8px', padding: '1rem', borderLeft: '4px solid #14b8a6' }}>
                <p style={{ fontWeight: '600', color: '#ffffff', marginBottom: '0.5rem' }}>Why it matters:</p>
                <p style={{ fontSize: '0.95rem', color: '#a0a0a0' }}>
                  The number one cause of burnout is taking on more than you can handle. 
                  Capacity Gate acts like a protective barrier, ensuring you only commit to 
                  what's sustainable.
                </p>
              </div>
            </div>

            <div className="ai-feature-card" style={{ padding: '1.5rem' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontWeight: '600', color: '#ffffff' }}>Today's Capacity</span>
                  <span style={{ fontSize: '0.875rem', color: '#f97316', fontWeight: '600' }}>85% Full</span>
                </div>
                <div style={{ width: '100%', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '9999px', height: '12px', marginBottom: '0.5rem' }}>
                  <div style={{ background: 'linear-gradient(to right, #14b8a6, #fb923c)', height: '12px', borderRadius: '9999px', width: '85%' }}></div>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>6.8 hours of 8 hours planned</p>
              </div>

              <div style={{ background: 'rgba(251, 146, 60, 0.1)', border: '2px solid rgba(251, 146, 60, 0.3)', borderRadius: '8px', padding: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                  <div style={{ width: '32px', height: '32px', background: '#fb923c', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: '1.125rem' }}>🦦</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ marginBottom: '0.5rem', fontWeight: '600', color: '#ffffff' }}>Whoa there! You're almost at capacity.</p>
                    <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem', color: '#a0a0a0' }}>Adding this task would push you to 95%. Would you like to:</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <button style={{ width: '100%', textAlign: 'left', background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem 0.75rem', borderRadius: '4px', fontSize: '0.875rem', transition: 'background 0.2s', border: 'none', color: '#a0a0a0', cursor: 'pointer' }}>→ Move tomorrow's task to next week</button>
                      <button style={{ width: '100%', textAlign: 'left', background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem 0.75rem', borderRadius: '4px', fontSize: '0.875rem', transition: 'background 0.2s', border: 'none', color: '#a0a0a0', cursor: 'pointer' }}>→ Schedule this for tomorrow instead</button>
                      <button style={{ width: '100%', textAlign: 'left', background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem 0.75rem', borderRadius: '4px', fontSize: '0.875rem', transition: 'background 0.2s', border: 'none', color: '#a0a0a0', cursor: 'pointer' }}>→ Add anyway (not recommended)</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Recovery Mode */}
      <section className="ai-powered-section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="ai-powered-container">
          <div className="flex items-center gap-4 mb-8">
            <div style={{ width: '64px', height: '64px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Activity style={{ color: '#10b981' }} size={32} />
            </div>
            <div>
              <h2 className="ai-powered-title" style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Recovery Mode</h2>
              <p className="ai-powered-description" style={{ marginBottom: 0 }}>Automatic adaptation when you need it most</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            <div>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '500', color: '#ffffff' }}>What it does:</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#10b981', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                  <span>Monitors completion rates and energy patterns</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#10b981', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                  <span>Detects early signs of burnout automatically</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#10b981', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                  <span>Reduces expectations to "minimum viable progress"</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#10b981', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                  <span>Guides you back to normal when ready</span>
                </li>
              </ul>

              <div style={{ marginTop: '1.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', padding: '1rem', borderLeft: '4px solid #10b981' }}>
                <p style={{ fontWeight: '600', color: '#ffffff', marginBottom: '0.5rem' }}>Why it matters:</p>
                <p style={{ fontSize: '0.95rem', color: '#a0a0a0' }}>
                  Burnout doesn't happen overnight—it's a gradual decline. Recovery Mode catches 
                  you before you spiral and creates space for rest without the guilt.
                </p>
              </div>
            </div>

            <div className="ai-feature-card" style={{ padding: '1.5rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
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
        </section>

      {/* Feature 3: Next Action Enforcement */}
      <section className="ai-powered-section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="ai-powered-container">
          <div className="flex items-center gap-4 mb-8">
            <div style={{ width: '64px', height: '64px', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Target style={{ color: '#14b8a6' }} size={32} />
            </div>
            <div>
              <h2 className="ai-powered-title" style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Next Action Enforcement</h2>
              <p className="ai-powered-description" style={{ marginBottom: 0 }}>Kill procrastination before it starts</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            <div>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '500', color: '#ffffff' }}>What it does:</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#14b8a6', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                  <span>Rejects vague tasks like "work on project"</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#14b8a6', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                  <span>Requires a specific first action for every task</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#14b8a6', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                  <span>Helps you identify immediate entry points</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#14b8a6', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                  <span>Eliminates decision fatigue when starting work</span>
                </li>
              </ul>

              <div style={{ marginTop: '1.5rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '8px', padding: '1rem', borderLeft: '4px solid #14b8a6' }}>
                <p style={{ fontWeight: '600', color: '#ffffff', marginBottom: '0.5rem' }}>Why it matters:</p>
                <p style={{ fontSize: '0.95rem', color: '#a0a0a0' }}>
                  Procrastination thrives on vagueness. When you know exactly what to do first, 
                  starting becomes effortless. This is the difference between "I should work on 
                  that" and "I'll open this file and edit this section."
                </p>
              </div>
            </div>

            <div className="ai-feature-card" style={{ padding: '1.5rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>❌ Rejected Task:</p>
                <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '2px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', padding: '0.75rem' }}>
                  <p style={{ fontWeight: '600', color: '#ffffff' }}>"Work on portfolio"</p>
                </div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                  <div style={{ width: '32px', height: '32px', background: '#14b8a6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.25rem' }}>
                    <span style={{ fontSize: '1.125rem' }}>🦦</span>
                  </div>
                  <div>
                    <p style={{ marginBottom: '0.5rem', fontWeight: '600', color: '#ffffff' }}>This task is too vague!</p>
                    <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem', color: '#a0a0a0' }}>What's the first specific action you'll take? Examples:</p>
                    <ul style={{ fontSize: '0.875rem', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem', color: '#909090' }}>
                      <li>• "Open Figma and create hero wireframe"</li>
                      <li>• "Write About page copy in Google Docs"</li>
                      <li>• "Export project screenshots from XD"</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <p style={{ fontSize: '0.875rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>✅ Accepted Task:</p>
                <div style={{ background: 'rgba(20, 184, 166, 0.1)', border: '2px solid #14b8a6', borderRadius: '8px', padding: '0.75rem' }}>
                  <p style={{ marginBottom: '0.25rem', fontWeight: '600', color: '#ffffff' }}>"Open Figma and create hero section wireframe"</p>
                  <p style={{ fontSize: '0.75rem', color: '#a0a0a0' }}>Clear action • Easy to start • No decision fatigue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Focus Blocks */}
      <section className="ai-powered-section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="ai-powered-container">
          <div className="flex items-center gap-4 mb-8">
            <div style={{ width: '64px', height: '64px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Timer style={{ color: '#10b981' }} size={32} />
            </div>
            <div>
              <h2 className="ai-powered-title" style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Focus Blocks</h2>
              <p className="ai-powered-description" style={{ marginBottom: 0 }}>Turn time into actionable feedback</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            <div>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '500', color: '#ffffff' }}>What it does:</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#10b981', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                  <span>Launch dedicated focus timers for each task</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#10b981', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                  <span>Track actual time vs. estimated time</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#10b981', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                  <span>Show live progress and motivation</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#10b981', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                  <span>Improve future planning with real data</span>
                </li>
              </ul>

              <div style={{ marginTop: '1.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', padding: '1rem', borderLeft: '4px solid #10b981' }}>
                <p style={{ fontWeight: '600', color: '#ffffff', marginBottom: '0.5rem' }}>Why it matters:</p>
                <p style={{ fontSize: '0.95rem', color: '#a0a0a0' }}>
                  The app feels "alive" when your actions create visible progress. Plus, tracking 
                  real time makes you better at estimating, which makes future planning more accurate 
                  and less stressful.
                </p>
              </div>
            </div>

            <div className="ai-feature-card" style={{ padding: '1.5rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
              <div style={{ background: 'linear-gradient(to bottom right, #14b8a6, #0d9488)', borderRadius: '12px', padding: '1.5rem', color: '#ffffff', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.875rem', opacity: 0.9 }}>Active Focus Block</span>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{ width: '32px', height: '32px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', border: 'none', cursor: 'pointer' }}>
                      <Pause style={{ color: '#ffffff' }} size={16} />
                    </button>
                  </div>
                </div>
                
                <h4 style={{ marginBottom: '1rem', fontSize: '1.125rem' }}>Create homepage wireframe</h4>
                
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '0.5rem', fontWeight: '700' }}>42:18</div>
                  <p style={{ fontSize: '0.875rem', opacity: 0.9 }}>of 60:00 estimated</p>
                </div>

                <div style={{ width: '100%', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '9999px', height: '12px', marginBottom: '1rem' }}>
                  <div style={{ background: '#ffffff', height: '12px', borderRadius: '9999px', transition: 'all 0.3s', width: '70%' }}></div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <span>Progress</span>
                  <span style={{ fontWeight: '600' }}>70% complete</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#a0a0a0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <span>Tasks completed today:</span>
                  <span style={{ fontWeight: '600', color: '#ffffff' }}>4 of 6</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <span>Focus time today:</span>
                  <span style={{ fontWeight: '600', color: '#ffffff' }}>3h 42m</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <span>Estimation accuracy:</span>
                  <span style={{ fontWeight: '600', color: '#14b8a6' }}>↑ 12% this week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 5: Mid-Day Replan */}
      <section className="ai-powered-section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="ai-powered-container">
          <div className="flex items-center gap-4 mb-8">
            <div style={{ width: '64px', height: '64px', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calendar style={{ color: '#14b8a6' }} size={32} />
            </div>
            <div>
              <h2 className="ai-powered-title" style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Mid-Day Replan</h2>
              <p className="ai-powered-description" style={{ marginBottom: 0 }}>Adapt when life happens</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            <div>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '500', color: '#ffffff' }}>What it does:</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#14b8a6', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                  <span>Easily adjust your schedule mid-day</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#14b8a6', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                  <span>Otto helps reprioritize remaining tasks</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#14b8a6', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                  <span>Moves tasks to tomorrow without guilt</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: '#a0a0a0' }}>
                  <Check style={{ color: '#14b8a6', marginTop: '0.25rem', flexShrink: 0 }} size={20} />
                    <span>Maintains realistic expectations</span>
                  </li>
                </ul>

                <div style={{ marginTop: '1.5rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '8px', padding: '1rem', borderLeft: '4px solid #14b8a6' }}>
                  <p style={{ fontWeight: '600', color: '#ffffff', marginBottom: '0.5rem' }}>Why it matters:</p>
                  <p style={{ fontSize: '0.95rem', color: '#a0a0a0' }}>
                    Plans change, and that's okay. Mid-Day Replan removes the stress of "falling 
                    behind" by helping you adapt intelligently. No more carrying guilt about 
                    unfinished tasks—just smart adjustments.
                  </p>
                </div>
              </div>

            <div className="ai-feature-card" style={{ padding: '1.5rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ fontWeight: '600', color: '#ffffff' }}>Today's Plan (2:30 PM)</span>
                    <button style={{ color: '#14b8a6', fontSize: '0.875rem', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer' }}>Replan</button>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem', color: '#a0a0a0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#606060' }}>
                      <Check size={16} />
                      <span style={{ textDecoration: 'line-through' }}>Morning standup</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#606060' }}>
                      <Check size={16} />
                      <span style={{ textDecoration: 'line-through' }}>Review PR #234</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                      <div style={{ width: '16px', height: '16px', border: '2px solid #606060', borderRadius: '2px' }}></div>
                      <span>Create wireframes (2h)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                      <div style={{ width: '16px', height: '16px', border: '2px solid #606060', borderRadius: '2px' }}></div>
                      <span>Client call prep (45m)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                      <div style={{ width: '16px', height: '16px', border: '2px solid #606060', borderRadius: '2px' }}></div>
                      <span>Update documentation (1h)</span>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.875rem', color: '#f97316', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '4px', padding: '0.5rem' }}>⚠️ Time remaining: 3h 30m for 3h 45m of work</div>
                </div>

                <div style={{ background: 'rgba(20, 184, 166, 0.1)', border: '2px solid rgba(20, 184, 166, 0.3)', borderRadius: '8px', padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', background: '#14b8a6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: '1.125rem' }}>🦦</span>
                    </div>
                    <div>
                      <p style={{ marginBottom: '0.5rem', fontWeight: '600', color: '#ffffff' }}>Need to adjust your plan?</p>
                      <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem', color: '#a0a0a0' }}>You're running a bit behind. Here's what I suggest:</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <button style={{ width: '100%', textAlign: 'left', background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem 0.75rem', borderRadius: '4px', fontSize: '0.875rem', transition: 'background 0.2s', border: 'none', color: '#a0a0a0', cursor: 'pointer' }}>→ Move "Update documentation" to tomorrow</button>
                        <button style={{ width: '100%', textAlign: 'left', background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem 0.75rem', borderRadius: '4px', fontSize: '0.875rem', transition: 'background 0.2s', border: 'none', color: '#a0a0a0', cursor: 'pointer' }}>→ Reduce wireframes to 1.5h (ship MVP)</button>
                        <button style={{ width: '100%', textAlign: 'left', background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem 0.75rem', borderRadius: '4px', fontSize: '0.875rem', transition: 'background 0.2s', border: 'none', color: '#a0a0a0', cursor: 'pointer' }}>→ I'll handle it, no changes needed</button>
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
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="hero-content">
          <h2 className="hero-subtitle">Ready to Experience These Features?</h2>
          <p className="hero-description">Start your free trial and see how Flow State transforms your productivity</p>
          <div className="hero-buttons">
            <Link href="/product" className="primary-button">
              <span className="button-icon">🦦</span>
              <span>Start Free Trial</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
