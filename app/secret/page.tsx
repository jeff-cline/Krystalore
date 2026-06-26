import './secret.css'
import { SecretGate } from '@/components/secret/gate'
import { SECRET_BODY } from './_body'
import Configurator from './Configurator'
import ApplyForm from './ApplyForm'

// THE SECRET WEAPON — the editorial sales page, restructured, sitting BEHIND the
// crystal lock gate. The configurator (Tailwind island) renders between two .ic-root
// blocks so the scoped editorial reset never touches it. Apply CTAs scroll to #apply.
const [BODY_TOP, BODY_BOTTOM] = SECRET_BODY.split('<!--CONFIGURATOR-->')

export default function SecretPage() {
  return (
    <SecretGate>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@400;500;600;700&family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />
      <div className="ic-root" dangerouslySetInnerHTML={{ __html: BODY_TOP }} />
      <Configurator />
      <div className="ic-root">
        <div dangerouslySetInnerHTML={{ __html: BODY_BOTTOM }} />
        <ApplyForm />
      </div>
    </SecretGate>
  )
}
