import MainLayout from '@/components/layout/MainLayout'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function HealthMasteryCheckoutPage() {
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto">
        <Link href="/health-mastery" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm mb-4">
          <ArrowLeft className="h-4 w-4" /> Back to Health Mastery
        </Link>

        <iframe
          src="https://krystalorecrews.com/healthmasterycheckout"
          title="Health Mastery Checkout"
          className="w-full border-0 rounded-2xl"
          style={{ height: '1200px' }}
          allow="payment"
        />
      </div>
    </MainLayout>
  )
}
