import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import CommandCenter from '@/components/CommandCenter'

export default function CommandPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F6F8FA]">
        <CommandCenter />
      </main>
      <Footer />
    </>
  )
}
