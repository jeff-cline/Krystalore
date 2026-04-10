import Image from 'next/image'

const characters = [
  { src: '/images/logos/01-entrepreneur.png', alt: 'Krystalore - The Entrepreneur' },
  { src: '/images/logos/02-mountain-climber.png', alt: 'Krystalore - Mountain Climber' },
  { src: '/images/logos/03-bikini-model.png', alt: 'Krystalore - Fitness Model' },
  { src: '/images/logos/04-runner.png', alt: 'Krystalore - Marathon Runner' },
  { src: '/images/logos/05-cruise-hostess.png', alt: 'Krystalore - Retreat Hostess' },
  { src: '/images/logos/06-superwoman.png', alt: 'Krystalore - Superwoman' },
  { src: '/images/logos/07-retreat-meditation.png', alt: 'Krystalore - Meditation & Retreats' },
  { src: '/images/logos/08-waterfall-rappel.png', alt: 'Krystalore - Adventure' },
  { src: '/images/logos/09-military.png', alt: 'Krystalore - Military' },
  { src: '/images/logos/10-phd-graduate.png', alt: 'Krystalore - Scholar' },
  { src: '/images/logos/dress-blue-festival.png', alt: 'Krystalore - Blue Festival' },
  { src: '/images/logos/dress-green-tropical.png', alt: 'Krystalore - Green Tropical' },
  { src: '/images/logos/dress-teal-sparkle.png', alt: 'Krystalore - Teal Sparkle' },
]

export default function CharacterShowcase() {
  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-[#34c5c5] mb-8">
          Mind &bull; Body &bull; Business &bull; Beyond
        </p>
        <div className="flex items-end justify-center gap-2 sm:gap-4 flex-wrap">
          {characters.map((c) => (
            <div key={c.src} className="relative w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 flex-shrink-0 group">
              <Image
                src={c.src}
                alt={c.alt}
                fill
                className="object-contain object-bottom drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
