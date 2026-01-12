'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from "next/link";
import { BarChart3, Target, Lightbulb, Mail, Key, Lock } from 'lucide-react';

export default function LoginPage() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Dark */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-12 flex-col justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-4xl">🦦</span>
          <h1 className="text-3xl font-bold text-white">Flow State</h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              Empower Your Team's<br />Productivity
            </h2>
            <p className="text-slate-300 text-lg">
              Access powerful tools to guide your students and clients toward sustainable success without burnout.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 hover:bg-slate-800/70 transition">
              <div className="w-12 h-12 bg-teal-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-teal-400" />
              </div>
              <p className="text-white font-medium">Track student progress and engagement</p>
            </div>

            <div className="flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 hover:bg-slate-800/70 transition">
              <div className="w-12 h-12 bg-pink-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-pink-400" />
              </div>
              <p className="text-white font-medium">Customize workflows for your team</p>
            </div>

            <div className="flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 hover:bg-slate-800/70 transition">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-white font-medium">Access advanced coaching insights</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
          <p className="text-slate-300 italic mb-3">
            "Flow State has transformed how I coach my team. The insights are invaluable, and my students are achieving more while feeling less stressed."
          </p>
          <p className="text-teal-400 font-semibold">— Sarah Martinez, Executive Coach</p>
        </div>
      </div>

      {/* Right Side - Light */}
      <div className="w-full lg:w-1/2 bg-gray-50 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <span className="text-4xl">🦦</span>
            <h1 className="text-3xl font-bold text-gray-900">Flow State</h1>
          </div>

          {/* Staff Access Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-400 text-white text-xs font-bold rounded-full uppercase tracking-wider">
              <Lock className="w-3 h-3" />
              Staff Access
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600 text-base mb-8">
            Sign in to access your coaching dashboard
          </p>

          {/* Form */}
          <form action="/api/auth/signin" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-3">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
                  placeholder="instructor@flowstate.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-3">
                Password
              </label>
              <div className="relative">
                <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-teal-400 focus:ring-teal-400"
                />
                <span className="text-sm text-gray-700">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-teal-500 hover:text-teal-600 font-semibold transition"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-4 bg-teal-400 hover:bg-teal-500 text-white font-bold rounded-lg transition shadow-lg text-base uppercase tracking-wide"
            >
              Sign In
            </button>
          </form>

          {/* Create Account */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm mb-2">New to Flow State?</p>
            <Link
              href="/signup"
              className="text-teal-500 hover:text-teal-600 font-semibold text-base transition"
            >
              Create an instructor account
            </Link>
            <span className="text-gray-600 text-sm"> to get started</span>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center text-sm text-gray-500">
            Need help?{' '}
            <Link href="/contact" className="text-teal-500 hover:text-teal-600 font-semibold transition">
              Contact Support
            </Link>
            {' '}or visit our{' '}
            <Link href="/help" className="text-teal-500 hover:text-teal-600 font-semibold transition">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
