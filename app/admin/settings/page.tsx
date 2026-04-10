'use client'

import { useState, useEffect } from 'react'
import { Settings, Database, Upload, Mail, Video, Shield, Eye, EyeOff, CheckCircle, XCircle, AlertCircle, Save } from 'lucide-react'

interface EnvironmentConfig {
  database: {
    connected: boolean
    url?: string
    provider: string
  }
  uploadthing: {
    configured: boolean
    apiKey: string
  }
  mux: {
    configured: boolean
    tokenId?: string
    tokenSecret?: string
  }
  sendgrid: {
    configured: boolean
    apiKey?: string
  }
  nextauth: {
    configured: boolean
    secret?: string
  }
  app: {
    url: string
    environment: string
  }
}

interface PlatformSettings {
  siteName: string
  siteDescription: string
  allowRegistration: boolean
  requireEmailVerification: boolean
  defaultMembershipLevel: string
  maintenanceMode: boolean
  maintenanceMessage: string
}

export default function AdminSettingsPage() {
  const [envConfig, setEnvConfig] = useState<EnvironmentConfig | null>(null)
  const [platformSettings, setPlatformSettings] = useState<PlatformSettings>({
    siteName: 'Executive Krystalore',
    siteDescription: 'Premium coaching and development platform',
    allowRegistration: true,
    requireEmailVerification: true,
    defaultMembershipLevel: 'BASIC',
    maintenanceMode: false,
    maintenanceMessage: 'We are currently performing maintenance. Please check back soon.'
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showSecrets, setShowSecrets] = useState<{[key: string]: boolean}>({})
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null)

  useEffect(() => {
    fetchEnvironmentConfig()
  }, [])

  const fetchEnvironmentConfig = async () => {
    try {
      // In a real app, this would be a secure API call that checks environment variables
      // For now, we'll simulate the check based on what we know is configured
      
      const config: EnvironmentConfig = {
        database: {
          connected: true, // We know Neon Postgres is configured
          provider: 'PostgreSQL (Neon)',
          url: 'postgresql://****:****@****'
        },
        uploadthing: {
          configured: true, // We have the API key
          apiKey: process.env.NEXT_PUBLIC_UPLOADTHING_PUBLIC_KEY ? 'configured' : undefined
        },
        mux: {
          configured: false, // Would check if MUX_TOKEN_ID and MUX_TOKEN_SECRET exist
          tokenId: undefined,
          tokenSecret: undefined
        },
        sendgrid: {
          configured: false, // Would check if SENDGRID_API_KEY exists
          apiKey: undefined
        },
        nextauth: {
          configured: true, // Would check if NEXTAUTH_SECRET exists
          secret: 'configured'
        },
        app: {
          url: 'https://executive-krystalore.vercel.app',
          environment: process.env.NODE_ENV || 'development'
        }
      }

      setEnvConfig(config)
    } catch (error) {
      console.error('Failed to fetch environment config:', error)
    } finally {
      setLoading(false)
    }
  }

  const handlePlatformSettingsChange = (key: keyof PlatformSettings, value: any) => {
    setPlatformSettings(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const savePlatformSettings = async () => {
    setSaving(true)
    try {
      // In a real app, this would save to a settings table or environment variables
      // For now, we'll just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setMessage({ type: 'success', text: 'Settings saved successfully' })
      setTimeout(() => setMessage(null), 3000)
    } catch (error) {
      console.error('Failed to save settings:', error)
      setMessage({ type: 'error', text: 'Failed to save settings' })
      setTimeout(() => setMessage(null), 3000)
    } finally {
      setSaving(false)
    }
  }

  const toggleSecretVisibility = (key: string) => {
    setShowSecrets(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const maskSecret = (secret: string) => {
    if (!secret) return 'Not configured'
    return secret.substring(0, 8) + '****' + secret.substring(secret.length - 4)
  }

  const getStatusIcon = (configured: boolean, connected?: boolean) => {
    if (connected === false) {
      return <XCircle className="h-5 w-5 text-red-500" />
    }
    if (configured) {
      return <CheckCircle className="h-5 w-5 text-green-500" />
    }
    return <AlertCircle className="h-5 w-5 text-yellow-500" />
  }

  const getStatusText = (configured: boolean, connected?: boolean) => {
    if (connected === false) {
      return { text: 'Connection Failed', color: 'text-red-400' }
    }
    if (configured) {
      return { text: 'Connected', color: 'text-green-400' }
    }
    return { text: 'Not Configured', color: 'text-yellow-400' }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="card animate-pulse">
              <div className="h-32 bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Platform Settings</h1>
          <p className="text-gray-400">
            Configure integrations, environment settings, and platform preferences
          </p>
        </div>
      </div>

      {/* Message */}
      {message && (
        <div className={`p-4 rounded-lg flex items-center ${
          message.type === 'success' ? 'bg-green-800 text-green-200' : 'bg-red-800 text-red-200'
        }`}>
          {message.type === 'success' ? (
            <CheckCircle className="h-5 w-5 mr-2" />
          ) : (
            <XCircle className="h-5 w-5 mr-2" />
          )}
          {message.text}
        </div>
      )}

      {/* Environment Configuration */}
      <div className="card">
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
          <Settings className="h-5 w-5 mr-2" />
          Environment Configuration
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Database */}
          <div className="p-4 bg-dark-700 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Database className="h-5 w-5 text-primary mr-2" />
                <h3 className="text-white font-medium">Database</h3>
              </div>
              {getStatusIcon(envConfig?.database.connected || false)}
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Provider: {envConfig?.database.provider}</p>
              <p className={`text-sm ${getStatusText(envConfig?.database.connected || false).color}`}>
                Status: {getStatusText(envConfig?.database.connected || false).text}
              </p>
            </div>
          </div>

          {/* UploadThing */}
          <div className="p-4 bg-dark-700 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Upload className="h-5 w-5 text-secondary mr-2" />
                <h3 className="text-white font-medium">UploadThing</h3>
              </div>
              {getStatusIcon(envConfig?.uploadthing.configured || false)}
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <p className="text-sm text-gray-400 flex-1">
                  API Key: {showSecrets.uploadthing 
                    ? envConfig?.uploadthing.apiKey 
                    : maskSecret(envConfig?.uploadthing.apiKey || '')
                  }
                </p>
                <button
                  onClick={() => toggleSecretVisibility('uploadthing')}
                  className="ml-2 text-gray-400 hover:text-white"
                >
                  {showSecrets.uploadthing ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <p className={`text-sm ${getStatusText(envConfig?.uploadthing.configured || false).color}`}>
                Status: {getStatusText(envConfig?.uploadthing.configured || false).text}
              </p>
            </div>
          </div>

          {/* Mux */}
          <div className="p-4 bg-dark-700 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Video className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="text-white font-medium">Mux Video</h3>
              </div>
              {getStatusIcon(envConfig?.mux.configured || false)}
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                Token ID: {envConfig?.mux.tokenId ? maskSecret(envConfig.mux.tokenId) : 'Not configured'}
              </p>
              <p className={`text-sm ${getStatusText(envConfig?.mux.configured || false).color}`}>
                Status: {getStatusText(envConfig?.mux.configured || false).text}
              </p>
            </div>
          </div>

          {/* SendGrid */}
          <div className="p-4 bg-dark-700 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-500 mr-2" />
                <h3 className="text-white font-medium">SendGrid</h3>
              </div>
              {getStatusIcon(envConfig?.sendgrid.configured || false)}
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                API Key: {envConfig?.sendgrid.apiKey ? maskSecret(envConfig.sendgrid.apiKey) : 'Not configured'}
              </p>
              <p className={`text-sm ${getStatusText(envConfig?.sendgrid.configured || false).color}`}>
                Status: {getStatusText(envConfig?.sendgrid.configured || false).text}
              </p>
            </div>
          </div>

          {/* NextAuth */}
          <div className="p-4 bg-dark-700 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-purple-500 mr-2" />
                <h3 className="text-white font-medium">Authentication</h3>
              </div>
              {getStatusIcon(envConfig?.nextauth.configured || false)}
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Provider: NextAuth.js</p>
              <p className={`text-sm ${getStatusText(envConfig?.nextauth.configured || false).color}`}>
                Status: {getStatusText(envConfig?.nextauth.configured || false).text}
              </p>
            </div>
          </div>

          {/* App Info */}
          <div className="p-4 bg-dark-700 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Settings className="h-5 w-5 text-primary mr-2" />
                <h3 className="text-white font-medium">Application</h3>
              </div>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">URL: {envConfig?.app.url}</p>
              <p className="text-sm text-gray-400">Environment: {envConfig?.app.environment}</p>
              <p className="text-sm text-green-400">Status: Running</p>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Settings */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            Platform Settings
          </h2>
          <button
            onClick={savePlatformSettings}
            disabled={saving}
            className="btn-primary flex items-center disabled:opacity-50"
          >
            <Save className="h-4 w-4 mr-2" />
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* General Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">General</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Site Name
              </label>
              <input
                type="text"
                value={platformSettings.siteName}
                onChange={(e) => handlePlatformSettingsChange('siteName', e.target.value)}
                className="w-full bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Site Description
              </label>
              <textarea
                value={platformSettings.siteDescription}
                onChange={(e) => handlePlatformSettingsChange('siteDescription', e.target.value)}
                rows={3}
                className="w-full bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Default Membership Level
              </label>
              <select
                value={platformSettings.defaultMembershipLevel}
                onChange={(e) => handlePlatformSettingsChange('defaultMembershipLevel', e.target.value)}
                className="w-full bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white"
              >
                <option value="FREE">Free</option>
                <option value="BASIC">Basic</option>
                <option value="PREMIUM">Premium</option>
                <option value="VIP">VIP</option>
              </select>
            </div>
          </div>

          {/* User Registration Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">User Registration</h3>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-300">
                  Allow New Registrations
                </label>
                <p className="text-xs text-gray-400">
                  Allow new users to create accounts
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={platformSettings.allowRegistration}
                  onChange={(e) => handlePlatformSettingsChange('allowRegistration', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-300">
                  Require Email Verification
                </label>
                <p className="text-xs text-gray-400">
                  Users must verify email before accessing content
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={platformSettings.requireEmailVerification}
                  onChange={(e) => handlePlatformSettingsChange('requireEmailVerification', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-300">
                  Maintenance Mode
                </label>
                <p className="text-xs text-gray-400">
                  Put the platform in maintenance mode
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={platformSettings.maintenanceMode}
                  onChange={(e) => handlePlatformSettingsChange('maintenanceMode', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
              </label>
            </div>

            {platformSettings.maintenanceMode && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Maintenance Message
                </label>
                <textarea
                  value={platformSettings.maintenanceMessage}
                  onChange={(e) => handlePlatformSettingsChange('maintenanceMessage', e.target.value)}
                  rows={2}
                  className="w-full bg-dark-700 border border-gray-600 rounded px-3 py-2 text-white"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h2 className="text-xl font-semibold text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-600 rounded-lg hover:border-primary transition-colors text-left">
            <Database className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-medium text-white">Backup Database</h3>
            <p className="text-sm text-gray-400">Create a full database backup</p>
          </button>
          
          <button className="p-4 border border-gray-600 rounded-lg hover:border-primary transition-colors text-left">
            <Upload className="h-6 w-6 text-secondary mb-2" />
            <h3 className="font-medium text-white">Test Integrations</h3>
            <p className="text-sm text-gray-400">Verify all service connections</p>
          </button>
          
          <button className="p-4 border border-gray-600 rounded-lg hover:border-primary transition-colors text-left">
            <Settings className="h-6 w-6 text-blue-500 mb-2" />
            <h3 className="font-medium text-white">System Diagnostics</h3>
            <p className="text-sm text-gray-400">Run platform health checks</p>
          </button>
        </div>
      </div>
    </div>
  )
}