'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminClientsPage() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to users page since clients are redundant with users
    router.replace('/admin/users')
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-400">Redirecting to Users page...</p>
      </div>
    </div>
  )
}