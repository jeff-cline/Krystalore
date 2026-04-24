'use client'

import { useEffect, useRef, useState } from 'react'
import { Search, Upload, X, Folder, ImageIcon } from 'lucide-react'
import CrystalSpinner from './CrystalSpinner'

interface ImageItem {
  url: string
  name: string
  folder: string
  source: 'manifest' | 'upload'
}

interface ImagePickerProps {
  open: boolean
  onClose: () => void
  onPick: (url: string) => void
}

export default function ImagePicker({ open, onClose, onPick }: ImagePickerProps) {
  const [items, setItems] = useState<ImageItem[]>([])
  const [folders, setFolders] = useState<string[]>([])
  const [folder, setFolder] = useState('')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const load = async () => {
    setLoading(true)
    setError(null)
    try {
      const params = new URLSearchParams()
      if (folder) params.set('folder', folder)
      if (search) params.set('search', search)
      const res = await fetch(`/api/admin/images?${params.toString()}`)
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Load failed')
      setItems(data.items || [])
      if (data.folders) setFolders(data.folders)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!open) return
    load()
  }, [open])

  useEffect(() => {
    if (!open) return
    const t = setTimeout(load, 250)
    return () => clearTimeout(t)
  }, [search, folder])

  const handleUpload = async (file: File) => {
    setUploading(true)
    setError(null)
    try {
      const fd = new FormData()
      fd.append('file', file)
      fd.append('folder', 'cms-uploads')
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Upload failed')
      onPick(data.url)
      onClose()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setUploading(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-xl max-w-5xl w-full max-h-[88vh] flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-900 flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-teal" /> Pick or Upload an Image
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 p-1">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-5 py-3 border-b border-gray-200 flex flex-wrap items-center gap-2">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search images by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-teal outline-none"
            />
          </div>
          <select
            value={folder}
            onChange={(e) => setFolder(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-teal outline-none bg-white"
          >
            <option value="">All folders</option>
            {folders.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="bg-teal hover:bg-[#37a6a6] text-white text-sm font-medium px-3 py-2 rounded-lg inline-flex items-center gap-2 disabled:opacity-60"
          >
            {uploading ? <CrystalSpinner size={16} /> : <Upload className="h-4 w-4" />}
            {uploading ? 'Uploading…' : 'Upload New'}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0]
              if (f) handleUpload(f)
              e.target.value = ''
            }}
          />
        </div>

        {error && (
          <div className="mx-5 mt-3 p-2 text-xs bg-red-50 border border-red-200 text-red-700 rounded">{error}</div>
        )}

        <div className="flex-1 overflow-y-auto p-4">
          {loading && items.length === 0 ? (
            <div className="flex items-center justify-center h-40 text-gray-500 gap-3">
              <CrystalSpinner size={20} /> Loading images…
            </div>
          ) : items.length === 0 ? (
            <div className="text-center text-gray-400 italic py-12">
              No images found{search || folder ? ' for current filter' : ''}.
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
              {items.map((item) => (
                <button
                  key={item.url}
                  onClick={() => {
                    onPick(item.url)
                    onClose()
                  }}
                  className="group relative aspect-square rounded-lg overflow-hidden border border-gray-200 hover:border-teal hover:shadow-md transition-all bg-gray-50"
                  title={item.url}
                >
                  <img src={item.url} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                  {item.source === 'upload' && (
                    <span className="absolute top-1 right-1 text-[8px] uppercase bg-teal text-white px-1 rounded">up</span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/65 px-1 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-[8px] truncate">{item.name}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="px-5 py-2 border-t border-gray-200 text-xs text-gray-500 flex items-center justify-between">
          <span className="inline-flex items-center gap-1"><Folder className="h-3 w-3" /> {items.length} shown</span>
          <span>Click any image to select. Path is copied into the field.</span>
        </div>
      </div>
    </div>
  )
}
