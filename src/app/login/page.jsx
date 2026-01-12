'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from "next/link";
import { Mail, Lock } from 'lucide-react';

export default function LoginPage() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-slate-600 via-slate-700 to-teal-800">
      {/* Logo */}
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
          <h1 className="text-3xl font-bold text-white">Flow State</h1>
        </div>
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-700/80 text-white text-xs font-semibold rounded uppercase tracking-wider">
          <Lock className="w-3 h-3" />
          Staff Access
        </span>
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
        <p className="text-gray-600 text-sm mb-6">
          Sign in to access your coaching dashboard
        </p>

        {/* Form */}
        <form action="/api/auth/signin" method="POST" className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                placeholder="instructor@flowstate.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
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
                className="w-4 h-4 rounded border-gray-300 text-teal-500 focus:ring-teal-500"
              />
              <span className="text-sm text-gray-700">Remember me</span>
            </label>
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium transition"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg transition shadow-lg text-base uppercase tracking-wide"
          >
            Sign In
          </button>
        </form>

        {/* Create Account */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            New to Flow State?{' '}
            <Link
              href="/signup"
              className="text-blue-600 hover:text-blue-700 font-semibold transition"
            >
              Create an instructor account
            </Link>{' '}
            to get started
          </p>
        </div>

        {/* Help Section */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Need help?{' '}
          <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold transition">
            Contact Support
          </Link>
          {' '}or visit our{' '}
          <Link href="/help" className="text-blue-600 hover:text-blue-700 font-semibold transition">
            Help Center
          </Link>
        </div>
      </div>

      {/* Tagline */}
      <p className="mt-8 text-white text-sm font-medium">
        Stop the burnout cycle. Plan smarter, not harder.
      </p>
    </div>
  );
}
