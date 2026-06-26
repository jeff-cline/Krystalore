import './inner-circle.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { INNER_CIRCLE_BODY } from './_body'
import ApplyForm from './ApplyForm'

// The Inner Circle Retainer sales page — ported from the supplied design (scoped under
// .ic-root). Wrapped in the site's global Header/Footer; corner CTAs come from the root
// layout. Apply/Book buttons scroll to the #apply form, which posts to the core CRM + Zapmail.
export default function InnerCirclePage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@400;500;600;700&family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />
      <Header />
      <div className="ic-root">
        <div dangerouslySetInnerHTML={{ __html: INNER_CIRCLE_BODY }} />
        <ApplyForm />
      </div>
      <Footer />
    </>
  )
}
