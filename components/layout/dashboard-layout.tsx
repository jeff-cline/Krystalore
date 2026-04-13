import Navigation from './Navigation'

interface DashboardLayoutProps {
  children: React.ReactNode
  isAdmin?: boolean
}

export default function DashboardLayout({ children, isAdmin = false }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}
