'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Link from 'next/link'
import { Mail, Loader2, ArrowLeft, CheckCircle } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong')
      }

      setSent(true)
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="card">
            {sent ? (
              <div className="text-center py-4">
                <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-white mb-2">Check Your Email</h1>
                <p className="text-gray-400 mb-6">
                  If an account exists for <span className="text-white">{email}</span>, we&apos;ve sent password reset instructions.
                </p>
                <Link href="/auth/login" className="btn-primary inline-block">
                  Back to Sign In
                </Link>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <Link href="/auth/login" className="text-gray-400 hover:text-white text-sm flex items-center gap-1">
                    <ArrowLeft className="h-4 w-4" /> Back to Sign In
                  </Link>
                </div>

                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-white">Reset Password</h1>
                  <p className="text-gray-400 mt-2">Enter your email and we&apos;ll send you a reset link</p>
                </div>

                {error && (
                  <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input pl-10 w-full"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center">
                    {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Send Reset Link'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
