'use client'

import { useState, useEffect } from 'react'
import DashboardLayout from '@/components/layout/dashboard-layout'
import { Plug, Eye, EyeOff, CheckCircle, XCircle, Loader2, FolderOpen, Video, RefreshCw, X, Download } from 'lucide-react'

interface IntegrationField {
  key: string
  label: string
  type: 'text' | 'password'
  placeholder?: string
  envKey?: string
}

interface Integration {
  id: string
  name: string
  description: string
  icon: string
  fields: IntegrationField[]
  connected: boolean
}

const integrations: Integration[] = [
  {
    id: 'gohighlevel',
    name: 'GoHighLevel',
    description: 'CRM & marketing automation. Syncs new contacts when accounts are created.',
    icon: '🚀',
    fields: [
      { key: 'apiKey', label: 'API Key', type: 'password', placeholder: 'eyJhbGciOiJSUzI1NiIs...' },
      { key: 'locationId', label: 'Location ID', type: 'text', placeholder: 'loc_xxxxxxxx' },
    ],
    connected: false,
  },
  {
    id: 'mux',
    name: 'Mux',
    description: 'Video streaming & live streaming infrastructure.',
    icon: '🎬',
    fields: [
      { key: 'tokenId', label: 'Token ID', type: 'text', envKey: 'MUX_TOKEN_ID' },
      { key: 'tokenSecret', label: 'Token Secret', type: 'password', envKey: 'MUX_TOKEN_SECRET' },
      { key: 'webhookSecret', label: 'Webhook Secret', type: 'password', envKey: 'MUX_WEBHOOK_SECRET' },
    ],
    connected: true,
  },
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Payment processing for courses, memberships, and retreats.',
    icon: '💳',
    fields: [
      { key: 'publishableKey', label: 'Publishable Key', type: 'text', placeholder: 'pk_live_...' },
      { key: 'secretKey', label: 'Secret Key', type: 'password', placeholder: 'sk_live_...' },
    ],
    connected: false,
  },
  {
    id: 'cloudflare-stream',
    name: 'Cloudflare Stream',
    description: 'Video hosting and delivery via Cloudflare.',
    icon: '☁️',
    fields: [
      { key: 'accountId', label: 'Account ID', type: 'text' },
      { key: 'apiToken', label: 'API Token', type: 'password' },
    ],
    connected: false,
  },
]

interface DriveFile {
  id: string
  name: string
  type: string
  mimeType: string
  size?: string
  modifiedTime: string
}

function GoogleDriveCard() {
  const [driveState, setDriveState] = useState<{
    connected: boolean
    email: string | null
    lastSync: string | null
    videosImported: number
  }>({ connected: false, email: null, lastSync: null, videosImported: 0 })
  const [loading, setLoading] = useState(false)
  const [showBrowser, setShowBrowser] = useState(false)
  const [files, setFiles] = useState<DriveFile[]>([])
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set())
  const [importing, setImporting] = useState(false)
  const [importResult, setImportResult] = useState<{ imported: number; skipped: number } | null>(null)

  useEffect(() => {
    fetchStatus()
  }, [])

  const fetchStatus = async () => {
    try {
      const res = await fetch('/api/integrations/google-drive/connect?action=status')
      const data = await res.json()
      setDriveState(data)
    } catch {}
  }

  const handleConnect = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/integrations/google-drive/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'connect' }),
      })
      const data = await res.json()
      if (data.success) setDriveState(data.state)
    } catch {} finally { setLoading(false) }
  }

  const handleDisconnect = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/integrations/google-drive/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'disconnect' }),
      })
      const data = await res.json()
      if (data.success) {
        setDriveState(data.state)
        setShowBrowser(false)
        setFiles([])
      }
    } catch {} finally { setLoading(false) }
  }

  const handleBrowse = async () => {
    setShowBrowser(true)
    setImportResult(null)
    try {
      const res = await fetch('/api/integrations/google-drive')
      const data = await res.json()
      setFiles(data.files || [])
    } catch {}
  }

  const toggleFile = (id: string) => {
    setSelectedFiles(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const selectAllVideos = () => {
    const videoIds = files.filter(f => f.type === 'video').map(f => f.id)
    setSelectedFiles(new Set(videoIds))
  }

  const handleImport = async () => {
    const selected = files.filter(f => selectedFiles.has(f.id) && f.type === 'video')
    if (selected.length === 0) return
    setImporting(true)
    setImportResult(null)
    try {
      const res = await fetch('/api/integrations/google-drive', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videos: selected }),
      })
      const data = await res.json()
      setImportResult({ imported: data.imported, skipped: data.skipped })
      setSelectedFiles(new Set())
      fetchStatus()
    } catch {} finally { setImporting(false) }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="text-2xl mr-3">📁</span>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Google Drive</h3>
            <p className="text-sm text-gray-500">Connect your Drive to bulk import videos into the Video Vault</p>
          </div>
        </div>
        <div className="flex items-center">
          {driveState.connected ? (
            <span className="flex items-center text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
              <CheckCircle className="h-4 w-4 mr-1" /> Connected
            </span>
          ) : (
            <span className="flex items-center text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              <XCircle className="h-4 w-4 mr-1" /> Not Connected
            </span>
          )}
        </div>
      </div>

      {/* Connected Account Info */}
      {driveState.connected && driveState.email && (
        <div className="bg-[#F4F1EC] rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">Connected Account</div>
              <div className="font-medium text-gray-800">{driveState.email}</div>
            </div>
            <div className="text-right text-sm">
              {driveState.lastSync && (
                <div className="text-gray-500">
                  Last synced: {new Date(driveState.lastSync).toLocaleString()}
                </div>
              )}
              <div className="text-[#34c5c5] font-medium">{driveState.videosImported} videos imported</div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3 mb-4">
        {!driveState.connected ? (
          <button
            onClick={handleConnect}
            disabled={loading}
            className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: '#34c5c5' }}
          >
            {loading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Plug className="h-4 w-4 mr-2" />}
            Connect Google Drive
          </button>
        ) : (
          <>
            <button
              onClick={handleBrowse}
              className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: '#34c5c5' }}
            >
              <FolderOpen className="h-4 w-4 mr-2" />
              Import Videos to Vault
            </button>
            <button
              onClick={handleDisconnect}
              disabled={loading}
              className="flex items-center px-4 py-2 border border-red-300 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
            >
              {loading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <XCircle className="h-4 w-4 mr-2" />}
              Disconnect
            </button>
          </>
        )}
      </div>

      {/* Drive Browser Modal */}
      {showBrowser && (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-[#F4F1EC] px-4 py-3 flex items-center justify-between border-b border-gray-200">
            <h4 className="font-medium text-gray-800 flex items-center">
              <FolderOpen className="h-4 w-4 mr-2 text-[#34c5c5]" />
              Browse Google Drive
            </h4>
            <div className="flex items-center gap-2">
              <button onClick={selectAllVideos} className="text-xs text-[#34c5c5] hover:underline">
                Select All Videos
              </button>
              <button onClick={() => setShowBrowser(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {files.map(file => (
              <div
                key={file.id}
                className={`flex items-center px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                  file.type === 'folder' ? 'opacity-60' : 'cursor-pointer'
                }`}
                onClick={() => file.type === 'video' && toggleFile(file.id)}
              >
                {file.type === 'video' && (
                  <input
                    type="checkbox"
                    checked={selectedFiles.has(file.id)}
                    onChange={() => toggleFile(file.id)}
                    className="mr-3 rounded border-gray-300"
                  />
                )}
                {file.type === 'folder' ? (
                  <FolderOpen className="h-5 w-5 mr-3 text-[#E8A849]" />
                ) : (
                  <Video className="h-5 w-5 mr-3 text-[#34c5c5]" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-800 truncate">{file.name}</div>
                  <div className="text-xs text-gray-400">
                    {file.size && `${file.size} · `}
                    {new Date(file.modifiedTime).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Import Bar */}
          <div className="bg-[#F4F1EC] px-4 py-3 border-t border-gray-200 flex items-center justify-between">
            <span className="text-sm text-gray-600">
              {selectedFiles.size} video{selectedFiles.size !== 1 ? 's' : ''} selected
            </span>
            <div className="flex items-center gap-3">
              {importResult && (
                <span className="text-sm text-green-600 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  {importResult.imported} imported, {importResult.skipped} skipped
                </span>
              )}
              <button
                onClick={handleImport}
                disabled={selectedFiles.size === 0 || importing}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors ${
                  selectedFiles.size === 0 || importing ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                style={{ backgroundColor: '#34c5c5' }}
              >
                {importing ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Importing...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 mr-2" />
                    Import Selected
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function IntegrationCard({ integration }: { integration: Integration }) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [showFields, setShowFields] = useState<Record<string, boolean>>({})
  const [testing, setTesting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleTest = async () => {
    setTesting(true)
    setStatus('idle')
    await new Promise(r => setTimeout(r, 1500))
    setStatus(Math.random() > 0.5 ? 'success' : 'error')
    setTesting(false)
  }

  const handleSave = () => {
    console.log(`Saving ${integration.id}:`, values)
    alert(`${integration.name} settings saved (scaffold - would write to data/integrations.json)`)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="text-2xl mr-3">{integration.icon}</span>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{integration.name}</h3>
            <p className="text-sm text-gray-500">{integration.description}</p>
          </div>
        </div>
        <div className="flex items-center">
          {integration.connected ? (
            <span className="flex items-center text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
              <CheckCircle className="h-4 w-4 mr-1" /> Connected
            </span>
          ) : (
            <span className="flex items-center text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              <XCircle className="h-4 w-4 mr-1" /> Not Connected
            </span>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {integration.fields.map((field) => (
          <div key={field.key}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
            <div className="relative">
              <input
                type={field.type === 'password' && !showFields[field.key] ? 'password' : 'text'}
                value={values[field.key] || ''}
                onChange={(e) => setValues(prev => ({ ...prev, [field.key]: e.target.value }))}
                placeholder={field.envKey ? `From env: ${field.envKey}` : field.placeholder}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34c5c5] focus:border-[#34c5c5] outline-none pr-10"
              />
              {field.type === 'password' && (
                <button
                  type="button"
                  onClick={() => setShowFields(prev => ({ ...prev, [field.key]: !prev[field.key] }))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showFields[field.key] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-4">
        <button
          onClick={handleTest}
          disabled={testing}
          className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          {testing ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Plug className="h-4 w-4 mr-2" />}
          Test Connection
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
          style={{ backgroundColor: '#34c5c5' }}
        >
          Save
        </button>
        {status === 'success' && <span className="flex items-center text-sm text-green-600"><CheckCircle className="h-4 w-4 mr-1" /> Connected!</span>}
        {status === 'error' && <span className="flex items-center text-sm text-red-500"><XCircle className="h-4 w-4 mr-1" /> Failed</span>}
      </div>
    </div>
  )
}

export default function AdminIntegrationsPage() {
  return (
    <DashboardLayout isAdmin={true}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Integrations</h1>
          <p className="text-gray-600 mt-2">Manage API connections and third-party service integrations</p>
        </div>

        {/* Google Drive - Featured */}
        <GoogleDriveCard />

        <div className="space-y-6">
          {integrations.map((integration) => (
            <IntegrationCard key={integration.id} integration={integration} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
