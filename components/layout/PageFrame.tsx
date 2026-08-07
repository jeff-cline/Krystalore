import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'

/**
 * PageFrame — the standard site chrome for any landing page.
 *
 * Wrap a page's content in this and it always gets the site Header and Footer
 * with consistent styling, so a new page never ships un-framed:
 *
 *   export default function Page() {
 *     return (
 *       <PageFrame>
 *         <section>…</section>
 *       </PageFrame>
 *     )
 *   }
 *
 * `className` is applied to the <main> element if a page needs its own
 * background or spacing.
 */
export default function PageFrame({
  children,
  className = '',
  after,
}: {
  children: React.ReactNode
  className?: string
  /** Rendered below the Footer (site credit, extra scripts, etc.) */
  after?: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className={`flex-1 ${className}`}>{children}</main>
      <Footer />
      {after}
    </div>
  )
}
