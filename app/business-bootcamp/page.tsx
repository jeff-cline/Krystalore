import type { Metadata } from 'next'
import BusinessBootcampClient from './BusinessBootcampClient'

export const metadata: Metadata = {
  title: 'Business Boot Camp | Build & Scale with Krystalore Crews',
  description: 'Her expertise, powered by proprietary technology. Business Boot Camp, World Changers, Activate, and RocketShip — book a free consultation to build and scale your business.',
}

export default function BusinessBootcampPage() {
  return <BusinessBootcampClient />
}
