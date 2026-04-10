import Header from './header'
import Sidebar from './Sidebar'

interface DashboardLayoutProps {
  children: React.ReactNode
  isAdmin?: boolean
}

export default function DashboardLayout({ children, isAdmin = false }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar isAdmin={isAdmin} />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}