'use client'

import { ReactNode } from 'react'
import Navigation from './Navigation'
import Sidebar from './Sidebar'

interface MainLayoutProps {
  children: ReactNode
  showSidebar?: boolean
}

const MainLayout = ({ children, showSidebar = false }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="flex">
        {showSidebar && <Sidebar />}
        <main className={`flex-1 ${showSidebar ? 'ml-64' : ''}`}>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default MainLayout