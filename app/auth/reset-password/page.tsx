'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import MainLayout from '@/components/layout/MainLayout'
import Link from 'next/link'
import { Lock, Loader2, ArrowLeft, CheckCircle, Eye, EyeOff } from 'lucide-react'

function ResetPasswordForm() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setSuccess(true)
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!token) {
    return (
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-white mb-2">Invalid Reset Link</h1>
        <p className="text-gray-400 mb-6">
          This password reset link is invalid or has expired.
        </p>
        <Link href="/auth/forgot-password" className="btn-primary inline-block">
          Request New Reset Link
        </Link>
      </div>
    )
  }

  if (success) {
    return (
      <div className="text-center py-4">
        <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-white mb-2">Password Reset!</h1>
        <p className="text-gray-400 mb-6">
          Your password has been successfully reset. You can now sign in with your new password.
        </p>
        <Link href="/auth/login" className="btn-primary inline-block">
          Sign In
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className="mb-6">
        <Link href="/auth/login" className="text-gray-400 hover:text-white text-sm flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" /> Back to Sign In
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white">Set New Password</h1>
        <p className="text-gray-400 mt-2">Enter your new password below</p>
      </div>

      {error && (
        <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
            New Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input pl-10 pr-10 w-full"
              placeholder="At least 8 characters"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              id="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              required
              minLength={8}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-input pl-10 w-full"
              placeholder="Confirm your password"
            />
          </div>
        </div>

        <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center">
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Reset Password'}
        </button>
      </form>
    </>
  )
}

export default function ResetPasswordPage() {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="card">
            <Suspense fallback={<div className="text-center py-4"><Loader2 className="h-8 w-8 animate-spin text-gray-400 mx-auto" /></div>}>
              <ResetPasswordForm />
            </Suspense>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
