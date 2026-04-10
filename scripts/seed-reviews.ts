import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const reviews = [
  { firstName: "Alejandra", lastName: "M.", location: "Mexico City", rating: 5, review: "The Pitons catamaran tour was absolutely magical! Krystalore's energy is contagious. Best day of our cruise!", source: "gypsy-tours", createdAt: new Date("2026-01-15T14:30:00Z") },
  { firstName: "James", lastName: "T.", location: "London, UK", rating: 5, review: "Cane Garden Bay was paradise. The hangover scale is spot-on -- I was a solid 4 and that beach was exactly what I needed.", source: "gypsy-tours", createdAt: new Date("2026-01-18T09:15:00Z") },
  { firstName: "Sofia", lastName: "R.", location: "Sao Paulo, Brazil", rating: 5, review: "The Baths at Virgin Gorda was bucket list worthy. Krystalore knows her stuff!", source: "gypsy-tours", createdAt: new Date("2026-01-22T11:45:00Z") },
  { firstName: "Klaus", lastName: "M.", location: "Berlin, Germany", rating: 5, review: "Harrison's Cave was amazing, and yes, the AC was a lifesaver.", source: "gypsy-tours", createdAt: new Date("2026-01-25T16:20:00Z") },
  { firstName: "Priya", lastName: "S.", location: "Mumbai, India", rating: 5, review: "Absolutely loved the zip line tour! Krystalore's recommendations are spot on.", source: "gypsy-tours", createdAt: new Date("2026-01-28T08:00:00Z") },
  { firstName: "Emma", lastName: "L.", location: "Sydney, Australia", rating: 5, review: "The 365 beaches tour in Antigua was bloody brilliant. Krystalore is a legend!", source: "gypsy-tours", createdAt: new Date("2026-02-01T13:00:00Z") },
  { firstName: "Grace", lastName: "K.", location: "Lagos, Nigeria", rating: 5, review: "The Oistins Fish Fry was the real Barbados experience. Local food and culture at its best!", source: "gypsy-tours", createdAt: new Date("2026-02-11T14:00:00Z") },
  { firstName: "Rachel", lastName: "M.", location: "New York, USA", rating: 5, review: "Loterie Farm in St. Maarten is the hidden gem Krystalore promised. Pool in the jungle? Yes please.", source: "gypsy-tours", createdAt: new Date("2026-02-19T16:00:00Z") },
  { firstName: "William", lastName: "H.", location: "Chicago, USA", rating: 5, review: "I came for the cruise, stayed for the community. Gypsy Tours is about the people you meet.", source: "gypsy-tours", createdAt: new Date("2026-03-05T15:00:00Z") },
  { firstName: "Sarah", lastName: "M.", location: "Los Angeles, CA, USA", rating: 5, review: "I've traveled the world and Gypsy Tours is the most fun I've had. Krystalore is everything.", source: "gypsy-tours", createdAt: new Date("2026-03-11T16:15:00Z") },
]

async function main() {
  console.log('Seeding reviews...')
  for (const review of reviews) {
    await prisma.review.create({ data: { ...review, verified: true } })
  }
  console.log(`Seeded ${reviews.length} reviews.`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
