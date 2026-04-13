'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Coins, TrendingDown, Infinity, Calendar } from 'lucide-react'

interface BillingData {
  balance: {
    balance: number
    is_unlimited: boolean
  }
  usage: {
    total_spent: number
    by_type: Record<string, number>
    period_start: string
    period_end: string
  }
}

export default function FeedFlixBillingPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [billing, setBilling] = useState<BillingData | null>(null)
  const [loading, setLoading] = useState(true)
  const [days, setDays] = useState(30)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/login')
  }, [status, router])

  useEffect(() => {
    setLoading(true)
    fetch(`/api/feedflix/billing?days=${days}`)
      .then(r => r.json())
      .then(data => {
        if (data.error) throw new Error(data.error)
        setBilling(data)
        setError(null)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [days])

  if (status === 'loading') return null

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Billing & Usage</h1>
          <p className="text-gray-500 mt-1 text-sm sm:text-base">Streaming token balance and consumption</p>
        </div>
            <select
              value={days}
              onChange={e => setDays(Number(e.target.value))}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none"
            >
              <option value={7}>Last 7 days</option>
              <option value={14}>Last 14 days</option>
              <option value={30}>Last 30 days</option>
              <option value={90}>Last 90 days</option>
            </select>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm mb-6">{error}</div>
          )}

          {loading ? (
            <div className="text-center py-12 text-gray-500">Loading billing data...</div>
          ) : billing ? (
            <div className="space-y-8">
              {/* Balance Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center mb-3">
                    <Coins className="h-5 w-5 text-teal" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {billing.balance.is_unlimited ? (
                      <span className="flex items-center gap-2">
                        <Infinity className="h-8 w-8" /> Unlimited
                      </span>
                    ) : (
                      billing.balance.balance.toLocaleString()
                    )}
                  </p>
                  <p className="text-sm text-gray-500">Token Balance</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center mb-3">
                    <TrendingDown className="h-5 w-5 text-orange" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{billing.usage.total_spent.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">Tokens Spent ({days}d)</p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                    <Calendar className="h-5 w-5 text-gray-600" />
                  </div>
                  <p className="text-sm text-gray-900 font-medium">
                    {new Date(billing.usage.period_start).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    {' — '}
                    {new Date(billing.usage.period_end).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Billing Period</p>
                </div>
              </div>

              {/* Usage by Type */}
              {Object.keys(billing.usage.by_type).length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Usage by Type</h2>
                  <div className="space-y-4">
                    {Object.entries(billing.usage.by_type).map(([type, tokens]) => {
                      const pct = billing.usage.total_spent > 0
                        ? (tokens / billing.usage.total_spent) * 100
                        : 0
                      return (
                        <div key={type}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-gray-900 capitalize">{type}</span>
                            <span className="text-sm text-gray-500">{tokens.toLocaleString()} tokens ({Math.round(pct)}%)</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-teal rounded-full transition-all"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : null}
    </div>
  )
}
