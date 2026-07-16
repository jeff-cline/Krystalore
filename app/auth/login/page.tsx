'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Header from '@/components/layout/header'
import Link from 'next/link'
import { Mail, Lock, Eye, EyeOff, Loader2 } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(true)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        remember: remember ? 'true' : 'false',
        redirect: false,
      })

      if (result?.error) {
        setError('Invalid email or password')
      } else {
        router.push('/dashboard')
        router.refresh()
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex items-center justify-center px-4 py-14 md:py-20">
        <div className="w-full max-w-md">
          <div className="overflow-hidden rounded-3xl border border-[#34c5c5]/30 bg-white shadow-xl">
            {/* teal login box header */}
            <div className="bg-gradient-to-r from-[#34c5c5] to-[#0D9488] px-8 py-7 text-center">
              <h1 className="text-2xl font-black text-white">Welcome Back</h1>
              <p className="mt-1 text-sm text-white/90">Sign in to your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 p-8" autoComplete="on">
              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-center text-sm text-red-600">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-gray-700">Email Address</label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#34c5c5]" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-3 text-gray-900 placeholder-gray-400 focus:border-[#34c5c5] focus:outline-none focus:ring-2 focus:ring-[#34c5c5]/30"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-gray-700">Password</label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#34c5c5]" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-10 text-gray-900 placeholder-gray-400 focus:border-[#34c5c5] focus:outline-none focus:ring-2 focus:ring-[#34c5c5]/30"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0D9488]"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-[#0D9488] focus:ring-[#34c5c5]"
                  />
                  Remember me
                </label>
                <Link href="/auth/forgot-password" className="text-sm font-semibold text-[#0D9488] hover:underline">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#34c5c5] to-[#0D9488] py-3 font-bold text-white transition hover:brightness-105 disabled:opacity-50"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Sign In'}
              </button>
            </form>

            <div className="px-8 pb-8 text-center text-sm text-gray-500">
              Don&apos;t have an account?{' '}
              <Link href="/auth/signup" className="font-semibold text-[#0D9488] hover:underline">
                Sign up here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
