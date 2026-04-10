'use client'

import React, { useState } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'
import KrystalRating from '@/components/KrystalRating'

export default function GypsyToursPage() {
  const [unlocked, setUnlocked] = useState(false)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [formData, setFormData] = useState({ firstName: '', lastName: '', phone: '', email: '' })
  const [reviewData, setReviewData] = useState({ name: '', location: '', rating: 5, review: '' })
  const [submitStatus, setSubmitStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('https://jeff-cline.com/api/todo/webhook/lead-ingest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CRM-Key': 'jc-crm-2024'
        },
        body: JSON.stringify({
          source: 'gypsy-tours',
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          leadType: 'gypsy-tours-download'
        })
      })
      
      if (response.ok) {
        // Store lead data in sessionStorage for partner click tracking
        sessionStorage.setItem('gypsy-tours-lead', JSON.stringify(formData))
        setUnlocked(true)
        setSubmitStatus('success')
      }
    } catch (error) {
      setSubmitStatus('error')
    }
  }

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('https://jeff-cline.com/api/todo/webhook/lead-ingest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CRM-Key': 'jc-crm-2024'
        },
        body: JSON.stringify({
          source: 'gypsy-tours-review',
          name: reviewData.name,
          location: reviewData.location,
          rating: reviewData.rating,
          review: reviewData.review,
          leadType: 'review'
        })
      })
      setShowReviewForm(false)
      setReviewData({ name: '', location: '', rating: 5, review: '' })
    } catch (error) {
      console.error('Error submitting review:', error)
    }
  }

  const [activeModal, setActiveModal] = useState<number | null>(null)

  const hangoverLevels = [
    { level: 1, name: "Fresh & Fierce", desc: "You woke up at 5 AM for Beyond Limits Bootcamp. You're a machine. Bring on the hiking.", color: "bg-green-500",
      modalTitle: "Fresh & Fierce Mode -- Let's GO!",
      modalStory: "You're up before the sun, crushing Beyond Limits Bootcamp on the top deck with ocean views, and ready to conquer every island like the absolute warrior you are. Hiking volcanoes? Zip-lining through rainforests? Swimming with stingrays? BRING IT. You're operating at 100% and the Caribbean can't handle you.",
      modalCta: "Sign me up for the FULL SEND adventures!"
    },
    { level: 2, name: "Mildly Buzzed", desc: "You had a couple cocktails. Nothing a coconut water can't fix. Light adventure.", color: "bg-yellow-500",
      modalTitle: "Mildly Buzzed -- Still in the Game!",
      modalStory: "Last night was chill -- a couple of craft cocktails at the Scarlet Lady bar, some good conversation, bed by midnight like a responsible adult. You're bright-eyed with maybe a slight headache that a coconut water and some ocean breeze will fix. You want adventure, but like... the kind with snack breaks.",
      modalCta: "Give me the light adventure tours!"
    },
    { level: 3, name: "The Sweet Spot", desc: "Last night was fun. You need coffee but you're game. Medium energy tours.", color: "bg-[#34c5c5]",
      modalTitle: "The Sweet Spot -- Coffee First, Then We Roll!",
      modalStory: "OK so last night was FUN. You don't regret it (yet) but you definitely need that first espresso before making any decisions. You're somewhere between 'I could do a beach walk' and 'Don't talk to me until noon.' Medium energy is your vibe today -- something exciting enough to Instagram but chill enough that you don't die.",
      modalCta: "Show me the medium-energy sweet spots!"
    },
    { level: 4, name: "Questionable Decisions", desc: "You remember the dance floor. Barely. Beach + shade required.", color: "bg-red-500",
      modalTitle: "Questionable Decisions -- No Judgment Zone!",
      modalStory: "You remember dancing. You think. There may have been karaoke involved. Your shoes are by the pool somehow? The bartender knows your name now and that's either a flex or a warning sign. Today is about RECOVERY. You need a beach with shade, a hammock, and absolutely zero physical exertion. Maybe some fish tacos.",
      modalCta: "Find me shade and a hammock. That's all."
    },
    { level: 5, name: "Ship Zombie", desc: "You danced until 2 AM and may have done shots with the bartender. Pool day. Maybe a gentle beach.", color: "bg-purple-700",
      modalTitle: "Ship Zombie -- We've All Been There!",
      modalStory: "Listen. You went ALL IN last night. Scarlet Night hit different. You closed down the dance floor at 2 AM, somehow ended up doing shots with the bartender AND the DJ, and you're pretty sure you made a friendship pact with someone from another country. Today? Pool. Maybe a gentle beach if someone literally carries you there. The sun is your enemy and the pool bar is your best friend.",
      modalCta: "Just... pool day. Please. Pool day."
    }
  ]

  // KrystalRating component imported from @/components/KrystalRating

  const reviews = [
    { name: "Alejandra M.", location: "Mexico City", rating: 5, review: "The Pitons catamaran tour was absolutely magical! Krystalore's energy is contagious. Best day of our cruise!" },
    { name: "James T.", location: "London, UK", rating: 5, review: "Cane Garden Bay was paradise. The hangover scale is spot-on -- I was a solid 4 and that beach was exactly what I needed." },
    { name: "Sofia R.", location: "São Paulo, Brazil", rating: 5, review: "Que experiência incrível! The Baths at Virgin Gorda was bucket list worthy. Krystalore knows her stuff!" },
    { name: "Klaus M.", location: "Berlin, Germany", rating: 5, review: "Wunderbar! Harrison's Cave was amazing, and yes, the AC was a lifesaver. German efficiency meets Caribbean vibes." },
    { name: "Priya S.", location: "Mumbai, India", rating: 5, review: "Absolutely loved the zip line tour! Krystalore's recommendations are spot on. Can't wait for the next cruise!" },
    { name: "Chen W.", location: "Beijing, China", rating: 5, review: "太棒了! Maho Beach plane spotting was wild. Brought earplugs like Krystalore said - essential!" },
    { name: "Emma L.", location: "Sydney, Australia", rating: 5, review: "G'day! The 365 beaches tour in Antigua was bloody brilliant. Krystalore is a legend!" },
    { name: "Hassan A.", location: "Cairo, Egypt", rating: 5, review: "رائع جدا! Stingray City was surprisingly not terrifying, just like she promised. Amazing experience!" },
    { name: "Maria G.", location: "Barcelona, Spain", rating: 5, review: "¡Increíble! Nelson's Dockyard was gorgeous. History and views - perfect combo. Gracias Krystalore!" },
    { name: "Yuki T.", location: "Tokyo, Japan", rating: 5, review: "素晴らしい! The sulphur springs mud bath was like a Caribbean spa day. Arigatou gozaimasu!" },
    { name: "Pierre D.", location: "Paris, France", rating: 5, review: "Magnifique! Orient Beach on the French side was parfait. European vibes in the Caribbean - oui!" },
    { name: "Isabella F.", location: "Rome, Italy", rating: 5, review: "Bellissimo! The Shirley Heights sunset party was legendary. Steel drums and panoramic views!" },
    { name: "Lars N.", location: "Stockholm, Sweden", rating: 5, review: "Fantastisk! Beyond Limits Bootcamp on the bow was peak Gypsy. Ocean breeze and mindfulness - perfect!" },
    { name: "Grace K.", location: "Lagos, Nigeria", rating: 5, review: "Amazing! The Oistins Fish Fry was the real Barbados experience. Local food and culture at its best!" },
    { name: "David C.", location: "Toronto, Canada", rating: 5, review: "Eh! The America's Cup sailing was competitive and fun. Wind in your hair, exactly as advertised!" },
    { name: "Carmen V.", location: "Caracas, Venezuela", rating: 5, review: "¡Espectacular! The rainforest zip line had incredible Piton views. Adrenaline rush for sure!" },
    { name: "Hendrik B.", location: "Amsterdam, Netherlands", rating: 5, review: "Geweldig! Sage Mountain hike had views that made my jaw drop. Lush rainforest trail was perfect!" },
    { name: "Fatima K.", location: "Marrakech, Morocco", rating: 5, review: "Incredible! The catamaran snorkel tour with rum punch was obviously the best choice. Loved it!" },
    { name: "Miguel R.", location: "Buenos Aires, Argentina", rating: 5, review: "¡Excelente! Marigot Bay was one of the most beautiful spots. Perfect for recovery day!" },
    { name: "Aisha P.", location: "Johannesburg, South Africa", rating: 5, review: "Brilliant! The early morning fitness on deck ended the trip perfectly. Ocean views were stunning!" },
    { name: "Kenji O.", location: "Osaka, Japan", rating: 5, review: "The sea day salsa class was a game changer. Hit the dance floor that night with actual moves!" },
    { name: "Rachel M.", location: "New York, USA", rating: 5, review: "Loterie Farm in St. Maarten is the hidden gem Krystalore promised. Pool in the jungle? Yes please." },
    { name: "André F.", location: "Lisbon, Portugal", rating: 5, review: "A experiência foi fantástica! The Bathsheba coast was dramatic and the rum distillery? Perfeito!" },
    { name: "Thandiwe N.", location: "Cape Town, South Africa", rating: 5, review: "Shirley Heights sunset had steel drums and the best rum punch of my life. Legendary is right!" },
    { name: "Marco B.", location: "Milan, Italy", rating: 5, review: "Mamma mia! The snorkel and sail in Tortola with rum punch included? Krystalore gets it." },
    { name: "Suki K.", location: "Seoul, South Korea", rating: 5, review: "대박! El Yunque rainforest was pure magic. La Mina Falls is something everyone should see!" },
    { name: "Mohammed Z.", location: "Dubai, UAE", rating: 5, review: "The America's Cup sailing was thrilling! Never thought I'd sail a racing yacht. Unforgettable." },
    { name: "Patricia L.", location: "San Juan, Puerto Rico", rating: 5, review: "As a local, I'm impressed. Krystalore found spots even I haven't been to! The Old San Juan walk was perfect." },
    { name: "Bjorn E.", location: "Oslo, Norway", rating: 5, review: "Kjempebra! Pool Deck Recovery day was exactly what I needed after Scarlet Night. Zero regrets." },
    { name: "Ana C.", location: "Bogotá, Colombia", rating: 5, review: "¡Maravilloso! The Pitons catamaran was the best day. Rum punch, snorkeling, and sisterhood." },
    { name: "Derek W.", location: "Kingston, Jamaica", rating: 5, review: "Cane Garden Bay reminded me of home. Reggae, rum punch, hammock life. Krystalore knows the vibes!" },
    { name: "Lena S.", location: "Munich, Germany", rating: 5, review: "Wunderschön! Harrison's Cave was breathtaking. The underground waterfalls are otherworldly." },
    { name: "Kwame A.", location: "Accra, Ghana", rating: 5, review: "The networking on this cruise was incredible. Met my next business partner on a Gypsy Tour!" },
    { name: "Isabelle T.", location: "Montreal, Canada", rating: 5, review: "Formidable! Orient Beach on the French side was magnifique. European charm meets Caribbean sun." },
    { name: "Rafael P.", location: "Santo Domingo, DR", rating: 5, review: "The Condado Beach pre-board chill set the perfect vacation tone. Mojitos at sunset!" },
    { name: "Nina V.", location: "Moscow, Russia", rating: 5, review: "Потрясающе! The zip line through St. Lucia's rainforest was the adrenaline rush I needed!" },
    { name: "Carlos M.", location: "Medellín, Colombia", rating: 5, review: "Increíble! The Late Night Dance Floor was everything. Didn't sleep until 3 AM. Worth it!" },
    { name: "Fiona O.", location: "Dublin, Ireland", rating: 5, review: "Grand craic! Maho Beach with planes landing overhead was mad. Iconic Caribbean moment!" },
    { name: "Jung-Ho P.", location: "Busan, South Korea", rating: 5, review: "The Beyond Limits Bootcamp on the bow was transcendent. Ocean breeze at dawn. Peak experience." },
    { name: "Amara D.", location: "Dakar, Senegal", rating: 5, review: "Magnifique! The 365 beaches tour found the most pristine stretch of sand I've ever seen." },
    { name: "Tyler R.", location: "Austin, TX, USA", rating: 5, review: "The hangover scale is genius. Was a solid 5 and Condado Beach saved my life. Thank you Krystalore!" },
    { name: "Valentina S.", location: "Havana, Cuba", rating: 5, review: "The salsa & bachata class prepared me for the dance floor. Krystalore's a natural teacher!" },
    { name: "Rashid H.", location: "Karachi, Pakistan", rating: 5, review: "Stingray City in Antigua was incredible. Family-friendly and genuinely not scary at all!" },
    { name: "Charlotte B.", location: "Melbourne, Australia", rating: 5, review: "Reckon the Oistins Fish Fry was the most authentic local experience. Banks beer is ace!" },
    { name: "Diego L.", location: "Lima, Peru", rating: 5, review: "¡Tremendo! The farewell brunch with bottomless mimosas was the perfect ending to an epic week." },
    { name: "Mei L.", location: "Shanghai, China", rating: 5, review: "Nelson's Dockyard was beautiful. UNESCO heritage meets Caribbean harbor. Love the history!" },
    { name: "Samuel K.", location: "Nairobi, Kenya", rating: 5, review: "Made business connections at Shirley Heights that turned into real partnerships. Thank you!" },
    { name: "Astrid J.", location: "Copenhagen, Denmark", rating: 5, review: "Fantastisk! Sage Mountain hike at sunrise was absolutely worth the early wake-up call." },
    { name: "Roberto A.", location: "Mexico City, Mexico", rating: 5, review: "Las cataratas en El Yunque son mágicas! Krystalore's insider tips made all the difference." },
    { name: "Zara P.", location: "Port of Spain, Trinidad", rating: 5, review: "The Caribbean is home but Gypsy Tours showed me islands through fresh eyes. Incredible!" },
    { name: "William H.", location: "Chicago, USA", rating: 5, review: "I came for the cruise, stayed for the community. Gypsy Tours is about the people you meet." },
    { name: "Anya K.", location: "Prague, Czech Republic", rating: 5, review: "Úžasné! Carlisle Bay snorkeling over shipwrecks and swimming with sea turtles was surreal!" },
    { name: "Oluwafemi B.", location: "Lagos, Nigeria", rating: 5, review: "The networking alone was worth it. Connected with entrepreneurs from 15 different countries!" },
    { name: "Lucia R.", location: "Buenos Aires, Argentina", rating: 5, review: "Marigot Bay es pura belleza! Quiet, stunning, the most photogenic spot of the entire trip." },
    { name: "Ji-Yeon C.", location: "Incheon, South Korea", rating: 5, review: "정말 좋았어요! The sulphur springs mud bath was uniquely Caribbean. My skin has never been better!" },
    { name: "Patrick M.", location: "Glasgow, UK", rating: 5, review: "Brilliant! The dance class was a riot. Showed up with two left feet, left with actual moves." },
    { name: "Camille D.", location: "Lyon, France", rating: 5, review: "Extraordinaire! The catamaran in St. Lucia with Piton views was the highlight of 2026 for me." },
    { name: "Tomoko S.", location: "Kyoto, Japan", rating: 5, review: "とても楽しかった! The early morning fitness on deck was peaceful and powerful. Great way to close." },
    { name: "Ahmed R.", location: "Cairo, Egypt", rating: 5, review: "The snorkel spots in Tortola were secret paradise. Krystalore's local knowledge is unmatched." },
    { name: "Sienna W.", location: "Auckland, New Zealand", rating: 5, review: "Sweet as! Cane Garden Bay was paradise. Hammock, rum punch, reggae. What more do you need?" },
    { name: "Jorge V.", location: "Panama City, Panama", rating: 5, review: "The whole Gypsy Tours concept is genius. Organized enough to work, spontaneous enough to love." },
    { name: "Nneka I.", location: "Abuja, Nigeria", rating: 5, review: "As a female entrepreneur, the connections I made were invaluable. Business + beaches = perfection." },
    { name: "Lucas G.", location: "Vienna, Austria", rating: 5, review: "Wunderbar! The America's Cup yacht was competitive and exhilarating. Felt like a real sailor!" },
    { name: "Divya R.", location: "Bangalore, India", rating: 5, review: "The Baths at Virgin Gorda was genuinely bucket list material. Crystal water, giant boulders, magic!" },
    { name: "Antoine M.", location: "Brussels, Belgium", rating: 5, review: "Fantastique! The late night dance til 2 AM at The Manor was the best night of the cruise!" },
    { name: "Madison K.", location: "Miami, FL, USA", rating: 5, review: "I've done cruises before but never like this. Gypsy Tours made every port day an adventure." },
    { name: "Erik L.", location: "Gothenburg, Sweden", rating: 5, review: "Underbart! The hangover rating saved me from overcommitting on Day 4. Beach it was!" },
    { name: "Chiara T.", location: "Florence, Italy", rating: 5, review: "The Oistins Fish Fry was authentic Caribbean culture. Local food, live music, unforgettable." },
    { name: "Raymond C.", location: "Manila, Philippines", rating: 5, review: "Ang galing! Maho Beach plane spotting was wild. Never experienced anything like it!" },
    { name: "Saoirse O.", location: "Cork, Ireland", rating: 5, review: "The craic was mighty! Met lifelong friends on the Shirley Heights sunset party. Magic!" },
    { name: "Niklas H.", location: "Helsinki, Finland", rating: 5, review: "Mahtava! Beyond Limits Bootcamp followed by the pool day combo was the perfect sea day balance." },
    { name: "Fatou S.", location: "Dakar, Senegal", rating: 5, review: "The women I met on Gypsy Tours are now my closest friends. Community is everything." },
    { name: "Jake P.", location: "Denver, CO, USA", rating: 5, review: "Sage Mountain hike in Tortola was spectacular. Highest point in the BVI with insane views!" },
    { name: "Catalina E.", location: "Quito, Ecuador", rating: 5, review: "¡Increíble! The zip line through St. Lucia's rainforest with Piton views was unforgettable!" },
    { name: "Dmitri V.", location: "St. Petersburg, Russia", rating: 5, review: "Восхитительно! The Bathsheba Beach dramatic coastline was like nowhere else on earth." },
    { name: "Angela F.", location: "Toronto, Canada", rating: 5, review: "The lead capture said 'unlock the guide' and it delivered. Every tour recommendation was gold." },
    { name: "Kofi M.", location: "Kumasi, Ghana", rating: 5, review: "Business networking on a Caribbean cruise? Yes please! Made deals between snorkel stops." },
    { name: "Hana K.", location: "Tel Aviv, Israel", rating: 5, review: "!מדהים The 365 beaches island tour found hidden coves that most tourists never see." },
    { name: "Sandra P.", location: "Zurich, Switzerland", rating: 5, review: "The Swiss precision in me appreciated the hangover scale. Accurate to the decimal point." },
    { name: "Bao N.", location: "Ho Chi Minh City, Vietnam", rating: 5, review: "Tuyệt vời! The catamaran snorkel in Tortola was worth every moment. Rum punch included!" },
    { name: "Simone L.", location: "Bridgetown, Barbados", rating: 5, review: "As a Bajan, seeing tourists fall in love with my island through Gypsy Tours warms my heart!" },
    { name: "Oscar M.", location: "Stockholm, Sweden", rating: 5, review: "The farewell brunch mimosas hit different when you're recapping the best week of your life." },
    { name: "Tanya M.", location: "Johannesburg, South Africa", rating: 5, review: "Krystalore's energy on the dance floor at 2 AM is something everyone should experience." },
    { name: "Ravi P.", location: "Delhi, India", rating: 5, review: "Harrison's Cave underground tour was magnificent. The air conditioning was indeed welcome!" },
    { name: "Christina L.", location: "Athens, Greece", rating: 5, review: "Εξαιρετικό! Marigot Bay reminded me of Greek islands but with Caribbean warmth!" },
    { name: "Felipe M.", location: "Rio de Janeiro, Brazil", rating: 5, review: "Sensacional! The pool deck recovery after Scarlet Night is a sacred tradition. Loved it!" },
    { name: "Noor A.", location: "Amman, Jordan", rating: 5, review: "!رائع The stingray encounter in Antigua was gentle and beautiful. Not scary at all!" },
    { name: "Taylor J.", location: "Nashville, TN, USA", rating: 5, review: "The late night dance floor created connections that turned into business collabs. Incredible." },
    { name: "Ingrid K.", location: "Bergen, Norway", rating: 5, review: "The Old San Juan walking tour was the perfect cultural start before boarding. Loved the piraguas!" },
    { name: "Youssef B.", location: "Casablanca, Morocco", rating: 5, review: "Loterie Farm was the best kept secret indeed. Jungle pool and zip lines in St. Maarten!" },
    { name: "Diane W.", location: "London, UK", rating: 5, review: "The Carlisle Bay shipwreck snorkel was surreal. Sea turtles swimming alongside you. Magical." },
    { name: "Min-Jun L.", location: "Seoul, South Korea", rating: 5, review: "환상적! The whole organized-unorganized vibe is what makes Gypsy Tours special." },
    { name: "Rosa D.", location: "Cartagena, Colombia", rating: 5, review: "Found my tribe on this cruise. Entrepreneurs, dreamers, vagabonds -- my people." },
    { name: "Stefan M.", location: "Bucharest, Romania", rating: 5, review: "Extraordinar! Orient Beach was sophisticated and relaxing. French side vibes delivered." },
    { name: "Gabrielle T.", location: "Port-au-Prince, Haiti", rating: 5, review: "Krystalore's warmth makes everyone feel like family. Best host in the Caribbean!" },
    { name: "Jack H.", location: "Perth, Australia", rating: 5, review: "The snorkel and sail adventure was absolutely ripper. Secret spots, rum punch, perfection." },
    { name: "Esmeralda V.", location: "Guadalajara, Mexico", rating: 5, review: "¡Viva las Gypsy Tours! The Beyond Limits Bootcamp followed by the dance class was my soul combo." },
    { name: "Ibrahim T.", location: "Istanbul, Turkey", rating: 5, review: "Harika! The networking cruise concept is genius. Business happens naturally over adventures." },
    { name: "Sarah M.", location: "Los Angeles, CA, USA", rating: 5, review: "I've traveled the world and Gypsy Tours is the most fun I've had. Krystalore is everything." }
  ]

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Gypsy Tours by Krystalore - Caribbean Edition",
            "description": "Curated Caribbean cruise shore excursion tours for Virgin Voyages Valiant Lady March 21-28, 2026",
            "touristType": "Cruise Passengers",
            "partOfTrip": [
              { "@type": "Place", "name": "San Juan, Puerto Rico" },
              { "@type": "Place", "name": "Tortola, British Virgin Islands" },
              { "@type": "Place", "name": "Bridgetown, Barbados" },
              { "@type": "Place", "name": "Castries, St. Lucia" },
              { "@type": "Place", "name": "St. John's, Antigua" },
              { "@type": "Place", "name": "Philipsburg, St. Maarten" }
            ],
            "subjectOf": {
              "@type": "Review",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "ratingCount": "100"
              }
            }
          })
        }}
      />

      {/* GHL Form Embed Script */}
      <script src="https://link.elite360.io/js/form_embed.js" async />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Header />
        
        {/* Hero Section */}
        <div className="relative overflow-hidden" style={{ backgroundColor: '#0d9488' }}>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <div className="flex flex-col items-center space-y-8">
              {/* Captain's Wheel */}
              <div className="w-16 h-16 text-white">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <circle cx="50" cy="50" r="8" fill="currentColor"/>
                  {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
                    <g key={angle} transform={`rotate(${angle} 50 50)`}>
                      <line x1="50" y1="12" x2="50" y2="20" stroke="currentColor" strokeWidth="4"/>
                      <line x1="50" y1="25" x2="50" y2="42" stroke="currentColor" strokeWidth="2"/>
                    </g>
                  ))}
                </svg>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl tracking-tight">
                GYPSY TOURS
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl md:text-2xl font-bold text-cyan-200 tracking-widest uppercase">
                  San Juan Social Club Presents
                </p>
                <p className="text-2xl md:text-3xl font-serif italic text-cyan-100">
                  by the one and only Krystalore
                </p>
                <p className="text-lg text-cyan-200">
                  Virgin Voyages Valiant Lady • March 21-28, 2026
                </p>
                <p className="text-base text-white/80 max-w-2xl mx-auto">
                  The most organized unorganized tours group of vagabonds -- brought to you by those living their best life on the best networking cruise for business and entrepreneurs
                </p>
              </div>
              
              {/* Cartoon Character */}
              <div className="relative max-w-lg mx-auto">
                <Image
                  src="/images/logos/00-gypsy-tours-original.png"
                  alt="Gypsy Tours by Krystalore - Cartoon tour guide character with captain's hat on Caribbean beach"
                  width={800}
                  height={600}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
              
              <button 
                onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-coral-500 hover:bg-coral-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Download the Full Tour Guide 🌊
              </button>
              
              <button
                onClick={() => {
                  setShowReviewForm(true)
                  setTimeout(() => {
                    document.getElementById('review-form')?.scrollIntoView({ behavior: 'smooth' })
                  }, 100)
                }}
                className="bg-white text-teal-700 font-bold py-3 px-10 rounded-full text-lg shadow-xl hover:bg-teal-50 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 tracking-wide"
              >
                Leave a Review
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* About Gypsy Tours */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-teal-800 mb-8 text-center">What is a Gypsy Tour?</h2>
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <p className="text-2xl font-bold text-teal-700 text-center mb-6">
                The Most Organized Unorganized Tours Group of Vagabonds
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Brought to you by those living their best life on the best networking cruise for business and entrepreneurs -- 
                the <strong>San Juan Social Club</strong>. Extraordinary. Top of the top. The best, hosted by the best -- 
                the one and only life &amp; wellness, fitness, business, amazing <strong>Krystalore</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When Krystalore hits a port, she doesn't sit on the ship. She <strong>EXPLORES</strong>. 
                Gypsy Tours are curated adventures handpicked by your girl -- the ones the cruise brochures won't tell you about. 
                Whether you're fresh off Beyond Limits Bootcamp or still vibing from last night's dance floor, there's a Gypsy Tour for every energy level.
              </p>
              <p className="text-xl font-semibold text-teal-700 text-center mb-6">
                These aren't your grandma's shore excursions. These are <em>experiences</em>.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-xl border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">This Might Be For You If...</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3"><span className="text-teal-500 font-bold text-xl">{">"}</span> You don't want to plan... or you're hung over... or you're <em>kind of</em> hung over and you don't know what to do</li>
                <li className="flex items-start gap-3"><span className="text-teal-500 font-bold text-xl">{">"}</span> You don't wanna commit. You wanna do it last minute -- like most of us</li>
                <li className="flex items-start gap-3"><span className="text-teal-500 font-bold text-xl">{">"}</span> You just want to meet new people and make connections you wouldn't otherwise have access to</li>
                <li className="flex items-start gap-3"><span className="text-teal-500 font-bold text-xl">{">"}</span> You want a Gypsy Tour adventure with the most amazing Krystalore</li>
                <li className="flex items-start gap-3"><span className="text-teal-500 font-bold text-xl">{">"}</span> You're just having a great time and have money to spend... and you might just uncover your best life</li>
              </ul>
              <p className="text-lg text-teal-700 font-semibold mt-6 text-center">
                Come experience the world of Gypsy Tours -- hidden treasures, unforgettable memories, and relationships that change everything.
              </p>
            </div>
          </section>

          {/* Hangover Scale */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-teal-800 mb-8 text-center">How Hungover Are You?</h2>
            <p className="text-xl text-center text-gray-700 mb-8">Pick Your Tour Energy Level:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {hangoverLevels.map((level) => (
                <button
                  key={level.level}
                  onClick={() => setActiveModal(level.level)}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-teal-400 group"
                >
                  <div className={`w-10 h-10 ${level.color} rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform`}>
                    {level.level}
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{level.name}</h3>
                  <p className="text-sm text-gray-600">{level.desc}</p>
                  <p className="text-xs text-teal-500 font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Click to get started!</p>
                </button>
              ))}
            </div>

            {/* Hangover Level Modal */}
            {activeModal !== null && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setActiveModal(null)}>
                <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl relative animate-in" onClick={(e) => e.stopPropagation()}>
                  <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold">&times;</button>
                  
                  {hangoverLevels.filter(l => l.level === activeModal).map(level => (
                    <div key={level.level}>
                      <div className={`w-14 h-14 ${level.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl`}>
                        {level.level}
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 text-center mb-4">{level.modalTitle}</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">{level.modalStory}</p>
                      
                      {/* GHL Form in Modal */}
                      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200">
                        <p className="text-center text-teal-700 font-bold mb-3">{level.modalCta}</p>
                        <iframe
                          src="https://link.elite360.io/widget/form/2zPeHm5ZTsRec06Y0YQe"
                          style={{ width: '100%', height: '676px', border: 'none', borderRadius: '8px' }}
                          id={`modal-form-${level.level}`}
                          data-layout="{'id':'INLINE'}"
                          data-trigger-type="alwaysShow"
                          data-trigger-value=""
                          data-activation-type="alwaysActivated"
                          data-activation-value=""
                          data-deactivation-type="neverDeactivate"
                          data-deactivation-value=""
                          data-form-name="gypsy tour opt in form"
                          data-height="676"
                          data-layout-iframe-id={`modal-form-${level.level}`}
                          data-form-id="2zPeHm5ZTsRec06Y0YQe"
                          title="gypsy tour opt in form"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Lead Capture - GHL Form */}
          <section id="lead-capture" className="mb-16">
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Unlock the Full Gypsy Tours Guide</h2>
              <p className="text-xl mb-8">Get the complete tour guide with times, prices, insider tips, and Krystalore's personal picks</p>
              
              {!unlocked ? (
                <>
                  {/* GO HIGH LEVEL FORM */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-lg mx-auto">
                    <iframe
                      src="https://link.elite360.io/widget/form/2zPeHm5ZTsRec06Y0YQe"
                      style={{ width: '100%', height: '676px', border: 'none', borderRadius: '4px' }}
                      id="inline-2zPeHm5ZTsRec06Y0YQe"
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="gypsy tour opt in form"
                      data-height="676"
                      data-layout-iframe-id="inline-2zPeHm5ZTsRec06Y0YQe"
                      data-form-id="2zPeHm5ZTsRec06Y0YQe"
                      title="gypsy tour opt in form"
                    />
                  </div>
                </>
              ) : (
                <div>
                  <div className="text-2xl font-bold mb-4">
                    You're in! Scroll down for the full tour guide.
                  </div>
                  <a
                    href="/partners"
                    className="inline-block bg-white text-teal-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Check Out Our Partners
                  </a>
                </div>
              )}
            </div>
          </section>

          {/* Tour Listings */}
          <section className={`mb-16 ${!unlocked ? 'filter blur-sm relative' : ''}`}>
            {!unlocked && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 rounded-2xl">
                <div className="bg-white px-6 py-3 rounded-full text-lg font-bold">
                  Unlock Above ⬆️
                </div>
              </div>
            )}
            
            <h2 className="text-4xl font-bold text-teal-800 mb-12 text-center">Your Gypsy Tour Adventures</h2>
            
            {/* Day 1 - San Juan */}
            <div className="mb-12 bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-teal-700 mb-4">Day 1 • March 21 • San Juan, Puerto Rico</h3>
              <p className="text-gray-600 mb-6">Embarkation day tours before you board the Valiant Lady at 8:00 PM. Start your Caribbean adventure right!</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Old San Juan Walking Tour",
                    hangover: 2,
                    duration: "3 hours",
                    bestFor: "History lovers",
                    description: "Hit the cobblestone streets, snap pics at El Morro fortress, grab a piragua from a street vendor.",
                    krystaloreSays: "Start the trip RIGHT. The fortress views are Instagram gold!"
                  },
                  {
                    name: "El Yunque Rainforest Quick Trip",
                    hangover: 1,
                    duration: "4 hours", 
                    bestFor: "Nature enthusiasts",
                    description: "If you flew in early, THIS is what you do. Waterfall hikes, tropical birds, La Mina Falls.",
                    krystaloreSays: "Pure magic. Bring your waterproof phone case for the falls!"
                  },
                  {
                    name: "Condado Beach Pre-Board Chill",
                    hangover: 5,
                    duration: "2 hours",
                    bestFor: "Relaxation seekers",
                    description: "Grab a lounger, order a mojito, and ease into vacation mode.",
                    krystaloreSays: "No rush. Let the Caribbean vibe wash over you."
                  }
                ].map((tour, index) => (
                  <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                    <h4 className="font-bold text-xl text-gray-800 mb-2">{tour.name}</h4>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-semibold text-gray-600">Energy Level:</span>
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full ${i < tour.hangover ? hangoverLevels[tour.hangover - 1].color : 'bg-gray-200'}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-1"><strong>Duration:</strong> {tour.duration}</p>
                    <p className="text-sm text-gray-600 mb-3"><strong>Best for:</strong> {tour.bestFor}</p>
                    <p className="text-gray-700 mb-3">{tour.description}</p>
                    <div className="bg-coral-100 rounded-lg p-3">
                      <p className="text-sm font-semibold text-coral-800">Krystalore Says:</p>
                      <p className="text-sm text-coral-700 italic">"{tour.krystaloreSays}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 - Tortola */}
            <div className="mb-12 bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-teal-700 mb-4">Day 2 • March 22 • Tortola, British Virgin Islands</h3>
              <p className="text-gray-600 mb-6">First port day! Tortola offers stunning natural beauty and pristine Caribbean waters. 8:00 AM to 5:00 PM</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "The Baths at Virgin Gorda",
                    hangover: 1,
                    duration: "Full day",
                    bestFor: "Bucket list seekers",
                    description: "Giant boulders, crystal clear water, snorkeling through natural grottos.",
                    krystaloreSays: "This is BUCKET LIST stuff. Don't miss it. Wear water shoes!"
                  },
                  {
                    name: "Cane Garden Bay Beach Day",
                    hangover: 4,
                    duration: "Half day",
                    bestFor: "Recovery mode",
                    description: "White sand, rum punch, reggae music. Grab a hammock and let the Caribbean heal you.",
                    krystaloreSays: "Perfect hangover cure. The rum punch here is legendary."
                  },
                  {
                    name: "Sage Mountain Hike",
                    hangover: 1,
                    duration: "3 hours",
                    bestFor: "Adventure hikers",
                    description: "Highest point in the BVI. Lush rainforest trail with views that'll make your jaw drop.",
                    krystaloreSays: "The views are absolutely worth the climb. Bring water!"
                  },
                  {
                    name: "Snorkel & Sail Adventure",
                    hangover: 2,
                    duration: "4 hours",
                    bestFor: "Ocean lovers",
                    description: "Catamaran ride to secret snorkel spots. Rum punch included.",
                    krystaloreSays: "Obviously rum punch is included. This is the Caribbean!"
                  }
                ].map((tour, index) => (
                  <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                    <h4 className="font-bold text-xl text-gray-800 mb-2">{tour.name}</h4>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-semibold text-gray-600">Energy Level:</span>
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full ${i < tour.hangover ? hangoverLevels[tour.hangover - 1].color : 'bg-gray-200'}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-1"><strong>Duration:</strong> {tour.duration}</p>
                    <p className="text-sm text-gray-600 mb-3"><strong>Best for:</strong> {tour.bestFor}</p>
                    <p className="text-gray-700 mb-3">{tour.description}</p>
                    <div className="bg-coral-100 rounded-lg p-3">
                      <p className="text-sm font-semibold text-coral-800">Krystalore Says:</p>
                      <p className="text-sm text-coral-700 italic">"{tour.krystaloreSays}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 3 - Sea Day */}
            <div className="mb-12 bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-teal-700 mb-4">Day 3 • March 23 • At Sea (Ship Activities)</h3>
              <p className="text-gray-600 mb-6">Recovery day or adventure day - your choice! Take advantage of everything the Valiant Lady has to offer.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Beyond Limits Bootcamp on the Bow",
                    hangover: 1,
                    duration: "6:30 AM",
                    bestFor: "Early birds",
                    description: "Start your day right. Ocean breeze, sun rising, you on a yoga mat.",
                    krystaloreSays: "Peak Gypsy. The sunrise over the Caribbean is pure magic."
                  },
                  {
                    name: "Pool Deck Recovery",
                    hangover: 5,
                    duration: "All day",
                    bestFor: "Hangover survivors",
                    description: "DJ by the pool, frozen cocktails, zero expectations. This IS the vacation.",
                    krystaloreSays: "Sometimes you just need to float and sip. No judgment here."
                  },
                  {
                    name: "Dance Class: Salsa & Bachata",
                    hangover: 3,
                    duration: "2 PM",
                    bestFor: "Social butterflies",
                    description: "Learn the moves you'll need for tonight.",
                    krystaloreSays: "Trust me. These moves will come in handy at every port."
                  },
                  {
                    name: "Late Night Dance Floor til 2 AM",
                    hangover: 0,
                    duration: "10 PM - 2 AM",
                    bestFor: "Night owls",
                    description: "The Manor. Red Room. Scarlet Night vibes. We're not sleeping.",
                    krystaloreSays: "This CREATES tomorrow's hangover. Worth every minute."
                  }
                ].map((tour, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-sage-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <h4 className="font-bold text-xl text-gray-800 mb-2">{tour.name}</h4>
                    {tour.hangover > 0 && (
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-semibold text-gray-600">Energy Level:</span>
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${i < tour.hangover ? hangoverLevels[tour.hangover - 1].color : 'bg-gray-200'}`}
                          />
                        ))}
                      </div>
                    )}
                    <p className="text-sm text-gray-600 mb-1"><strong>Time:</strong> {tour.duration}</p>
                    <p className="text-sm text-gray-600 mb-3"><strong>Best for:</strong> {tour.bestFor}</p>
                    <p className="text-gray-700 mb-3">{tour.description}</p>
                    <div className="bg-coral-100 rounded-lg p-3">
                      <p className="text-sm font-semibold text-coral-800">Krystalore Says:</p>
                      <p className="text-sm text-coral-700 italic">"{tour.krystaloreSays}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 4 - Barbados */}
            <div className="mb-12 bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-teal-700 mb-4">Day 4 • March 24 • Bridgetown, Barbados</h3>
              <p className="text-gray-600 mb-6">Rich culture, stunning beaches, and rum that flows like water. Barbados is pure Caribbean soul. 8:00 AM to 8:00 PM</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Harrison's Cave Underground Tour",
                    hangover: 2,
                    duration: "3 hours",
                    bestFor: "Cave explorers",
                    description: "Limestone caves with stalactites and underground waterfalls. It's air conditioned down there.",
                    krystaloreSays: "You're welcome for the AC tip. The formations are incredible!"
                  },
                  {
                    name: "Carlisle Bay Snorkel & Shipwrecks",
                    hangover: 2,
                    duration: "3 hours",
                    bestFor: "Marine life lovers",
                    description: "Snorkel over actual shipwrecks and swim with sea turtles. Not kidding.",
                    krystaloreSays: "The turtles here are friendly. Bring an underwater camera!"
                  },
                  {
                    name: "Oistins Fish Fry Experience",
                    hangover: 3,
                    duration: "Evening",
                    bestFor: "Foodies",
                    description: "Local food, live music, cold Banks beer. This is the REAL Barbados.",
                    krystaloreSays: "Skip dinner on the ship. This is where locals eat and party."
                  },
                  {
                    name: "Bathsheba Beach & Rum Distillery",
                    hangover: 3,
                    duration: "Half day",
                    bestFor: "Rum enthusiasts",
                    description: "Dramatic coast plus rum tasting. Name a better combo.",
                    krystaloreSays: "I'll wait. The Mount Gay distillery is legendary for good reason."
                  }
                ].map((tour, index) => (
                  <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                    <h4 className="font-bold text-xl text-gray-800 mb-2">{tour.name}</h4>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-semibold text-gray-600">Energy Level:</span>
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full ${i < tour.hangover ? hangoverLevels[tour.hangover - 1].color : 'bg-gray-200'}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-1"><strong>Duration:</strong> {tour.duration}</p>
                    <p className="text-sm text-gray-600 mb-3"><strong>Best for:</strong> {tour.bestFor}</p>
                    <p className="text-gray-700 mb-3">{tour.description}</p>
                    <div className="bg-coral-100 rounded-lg p-3">
                      <p className="text-sm font-semibold text-coral-800">Krystalore Says:</p>
                      <p className="text-sm text-coral-700 italic">"{tour.krystaloreSays}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 5 - St. Lucia */}
            <div className="mb-12 bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-teal-700 mb-4">Day 5 • March 25 • Castries, St. Lucia</h3>
              <p className="text-gray-600 mb-6">The crown jewel of the Caribbean. Iconic Pitons, lush rainforest, and adventure around every corner. 8:00 AM to 6:00 PM</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Pitons Catamaran & Snorkel Tour",
                    hangover: 2,
                    duration: "Full day",
                    bestFor: "Instagram legends",
                    description: "See the iconic Pitons from the water, stop for lunch, snorkel, catamaran ride with rum punch.",
                    krystaloreSays: "The BEST day of the trip. Those Piton views are unmatched."
                  },
                  {
                    name: "Sulphur Springs Mud Bath",
                    hangover: 3,
                    duration: "3 hours",
                    bestFor: "Spa enthusiasts",
                    description: "Drive-in volcano. Smear volcanic mud on your face. It's a spa day, Caribbean style.",
                    krystaloreSays: "Your skin will thank you. The volcanic mud is like magic."
                  },
                  {
                    name: "Zip Line Through the Rainforest",
                    hangover: 1,
                    duration: "3 hours",
                    bestFor: "Adrenaline junkies",
                    description: "Fly through the jungle canopy with Piton views.",
                    krystaloreSays: "Adrenaline RUSH. The canopy views are breathtaking."
                  },
                  {
                    name: "Marigot Bay Beach Chill",
                    hangover: 4,
                    duration: "Half day",
                    bestFor: "Beach lovers",
                    description: "One of the most beautiful bays in the Caribbean. Quiet, stunning, perfect for recovery.",
                    krystaloreSays: "When you need peace and paradise in equal measure."
                  }
                ].map((tour, index) => (
                  <div key={index} className="bg-gradient-to-br from-sage-50 to-teal-50 rounded-xl p-6 border-l-4 border-sage-500">
                    <h4 className="font-bold text-xl text-gray-800 mb-2">{tour.name}</h4>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-semibold text-gray-600">Energy Level:</span>
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full ${i < tour.hangover ? hangoverLevels[tour.hangover - 1].color : 'bg-gray-200'}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-1"><strong>Duration:</strong> {tour.duration}</p>
                    <p className="text-sm text-gray-600 mb-3"><strong>Best for:</strong> {tour.bestFor}</p>
                    <p className="text-gray-700 mb-3">{tour.description}</p>
                    <div className="bg-coral-100 rounded-lg p-3">
                      <p className="text-sm font-semibold text-coral-800">Krystalore Says:</p>
                      <p className="text-sm text-coral-700 italic">"{tour.krystaloreSays}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 6 - Antigua */}
            <div className="mb-12 bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-teal-700 mb-4">Day 6 • March 26 • St. John's, Antigua</h3>
              <p className="text-gray-600 mb-6">365 beaches, UNESCO heritage, and sunset parties that become legend. 9:00 AM to 8:00 PM</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "365 Beaches Island Tour",
                    hangover: 2,
                    duration: "Full day",
                    bestFor: "Beach hoppers",
                    description: "They say there's a beach for every day of the year. We're gonna find the best ones.",
                    krystaloreSays: "Each beach has its own personality. We'll hit the greatest hits."
                  },
                  {
                    name: "Nelson's Dockyard Heritage Walk",
                    hangover: 3,
                    duration: "3 hours",
                    bestFor: "History buffs",
                    description: "UNESCO World Heritage Site. Restored 18th-century naval dockyard. History meets gorgeous harbor views.",
                    krystaloreSays: "The history here is fascinating and the views are Instagram gold."
                  },
                  {
                    name: "Stingray City Encounter",
                    hangover: 2,
                    duration: "3 hours",
                    bestFor: "Animal lovers",
                    description: "Wade into shallow water and interact with friendly stingrays.",
                    krystaloreSays: "Surprisingly not terrifying! These rays are gentle giants."
                  },
                  {
                    name: "Shirley Heights Sunset Party",
                    hangover: 0,
                    duration: "Evening",
                    bestFor: "Party legends",
                    description: "THE party spot. Steel drums, BBQ, rum punch, panoramic views.",
                    krystaloreSays: "This is where legends are made. The sunset views are unreal."
                  }
                ].map((tour, index) => (
                  <div key={index} className="bg-gradient-to-br from-coral-50 to-orange-50 rounded-xl p-6 border-l-4 border-coral-500">
                    <h4 className="font-bold text-xl text-gray-800 mb-2">{tour.name}</h4>
                    {tour.hangover > 0 && (
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-semibold text-gray-600">Energy Level:</span>
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${i < tour.hangover ? hangoverLevels[tour.hangover - 1].color : 'bg-gray-200'}`}
                          />
                        ))}
                      </div>
                    )}
                    <p className="text-sm text-gray-600 mb-1"><strong>Duration:</strong> {tour.duration}</p>
                    <p className="text-sm text-gray-600 mb-3"><strong>Best for:</strong> {tour.bestFor}</p>
                    <p className="text-gray-700 mb-3">{tour.description}</p>
                    <div className="bg-coral-100 rounded-lg p-3">
                      <p className="text-sm font-semibold text-coral-800">Krystalore Says:</p>
                      <p className="text-sm text-coral-700 italic">"{tour.krystaloreSays}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 7 - St. Maarten */}
            <div className="mb-12 bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-teal-700 mb-4">Day 7 • March 27 • Philipsburg, St. Maarten</h3>
              <p className="text-gray-600 mb-6">Two countries, one island, endless adventure. From plane spotting to European beaches. 8:00 AM to 5:00 PM</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Maho Beach Plane Spotting",
                    hangover: 4,
                    duration: "2 hours",
                    bestFor: "Thrill seekers",
                    description: "Literally stand on the beach while jumbo jets land RIGHT over your head. Wild. Iconic.",
                    krystaloreSays: "Bring earplugs! This is bucket list crazy and totally worth it."
                  },
                  {
                    name: "Orient Beach Day",
                    hangover: 3,
                    duration: "Half day",
                    bestFor: "European vibes",
                    description: "French side. European vibes. Lounge chairs, cocktails, turquoise water.",
                    krystaloreSays: "The French know how to do beaches. Sophisticated and stunning."
                  },
                  {
                    name: "America's Cup Sailing Regatta",
                    hangover: 2,
                    duration: "3 hours",
                    bestFor: "Competitive spirits",
                    description: "Sail an actual America's Cup yacht. Competitive. Fun. Wind in your hair.",
                    krystaloreSays: "You'll feel like a pro sailor. The competition is real!"
                  },
                  {
                    name: "Loterie Farm Nature Reserve",
                    hangover: 1,
                    duration: "3 hours",
                    bestFor: "Hidden gem hunters",
                    description: "Hidden gem. Pool in the jungle, zip lines, hiking trails.",
                    krystaloreSays: "The best-kept secret. Jungle pool vibes are unmatched."
                  }
                ].map((tour, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <h4 className="font-bold text-xl text-gray-800 mb-2">{tour.name}</h4>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-semibold text-gray-600">Energy Level:</span>
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full ${i < tour.hangover ? hangoverLevels[tour.hangover - 1].color : 'bg-gray-200'}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-1"><strong>Duration:</strong> {tour.duration}</p>
                    <p className="text-sm text-gray-600 mb-3"><strong>Best for:</strong> {tour.bestFor}</p>
                    <p className="text-gray-700 mb-3">{tour.description}</p>
                    <div className="bg-coral-100 rounded-lg p-3">
                      <p className="text-sm font-semibold text-coral-800">Krystalore Says:</p>
                      <p className="text-sm text-coral-700 italic">"{tour.krystaloreSays}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 8 - Return to San Juan */}
            <div className="mb-12 bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-teal-700 mb-4">Day 8 • March 28 • Return to San Juan</h3>
              <p className="text-gray-600 mb-6">The journey ends where it began. Arrive 6:30 AM - make the most of your final moments.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Early Morning Fitness on Deck",
                    hangover: 1,
                    duration: "6:00 AM",
                    bestFor: "Final push warriors",
                    description: "One last workout with ocean views.",
                    krystaloreSays: "End the trip strong. The sunrise over San Juan is beautiful."
                  },
                  {
                    name: "Farewell Brunch",
                    hangover: 5,
                    duration: "10:00 AM",
                    bestFor: "Celebration mode",
                    description: "Bottomless mimosas. Recap the week. Plan the next Gypsy Tour.",
                    krystaloreSays: "Toast to an incredible week. You've earned those mimosas!"
                  }
                ].map((tour, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-sage-50 rounded-xl p-6 border-l-4 border-gray-500">
                    <h4 className="font-bold text-xl text-gray-800 mb-2">{tour.name}</h4>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-semibold text-gray-600">Energy Level:</span>
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full ${i < tour.hangover ? hangoverLevels[tour.hangover - 1].color : 'bg-gray-200'}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-1"><strong>Time:</strong> {tour.duration}</p>
                    <p className="text-sm text-gray-600 mb-3"><strong>Best for:</strong> {tour.bestFor}</p>
                    <p className="text-gray-700 mb-3">{tour.description}</p>
                    <div className="bg-coral-100 rounded-lg p-3">
                      <p className="text-sm font-semibold text-coral-800">Krystalore Says:</p>
                      <p className="text-sm text-coral-700 italic">"{tour.krystaloreSays}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </section>

          {/* Reviews Section */}
          <section id="reviews" className="mb-16">
            <h2 className="text-4xl font-bold text-teal-800 mb-4 text-center">Gypsy Tours Reviews</h2>
            <p className="text-xl text-center text-gray-600 mb-12">Real reviews from real travelers. Rate your experience with Krystals.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {reviews.slice(0, 6).map((review, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-gray-800">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.location}</p>
                    </div>
                    <KrystalRating rating={review.rating} size="sm" />
                  </div>
                  <p className="text-gray-700 mb-3">"{review.review}"</p>
                  <div className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full inline-block">
                    Verified Gypsy Tourist
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center space-x-4">
              <button
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg"
              >
                Write Your Review
              </button>
              <a
                href="/reviews"
                className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors"
              >
                View All Reviews
              </a>
            </div>

            {showReviewForm && (
              <div id="review-form" className="mt-8 bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={reviewData.name}
                    onChange={(e) => setReviewData({...reviewData, name: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Where are you from?"
                    value={reviewData.location}
                    onChange={(e) => setReviewData({...reviewData, location: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
                    required
                  />
                  <div>
                    <label className="block text-sm font-medium mb-2">Krystal Rating</label>
                    <KrystalRating
                      rating={reviewData.rating}
                      size="lg"
                      interactive
                      onChange={(n) => setReviewData({...reviewData, rating: n})}
                    />
                  </div>
                  <textarea
                    placeholder="Your review..."
                    value={reviewData.review}
                    onChange={(e) => setReviewData({...reviewData, review: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg h-32 focus:ring-2 focus:ring-teal-500"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            )}
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-teal-800 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What are Gypsy Tours?",
                  a: "Gypsy Tours are curated shore excursion adventures handpicked by Krystalore Crews. They're authentic experiences that go beyond typical cruise offerings, designed for every energy level from 'Fresh & Fierce' to 'Ship Zombie.'"
                },
                {
                  q: "Who is Krystalore Crews?",
                  a: "Krystalore is your expert tour guide and Caribbean adventure curator. She's explored every port extensively to bring you the best hidden gems and must-see experiences that cruise brochures won't tell you about."
                },
                {
                  q: "What cruise is this for?",
                  a: "These Gypsy Tours are specifically designed for the Virgin Voyages Valiant Lady cruise departing San Juan on March 21, 2026, with stops in Tortola, Barbados, St. Lucia, Antigua, and St. Maarten."
                },
                {
                  q: "How does the hangover scale work?",
                  a: "Our fun 1-5 energy rating system helps you pick the perfect tour based on how you're feeling! From 1 (Fresh & Fierce - ready for hiking) to 5 (Ship Zombie - beach and shade required)."
                },
                {
                  q: "Are these official Virgin Voyages excursions?",
                  a: "No, these are independently curated experiences by Krystalore. They're designed to complement your Virgin Voyages cruise with authentic local adventures you won't find in official cruise materials."
                },
                {
                  q: "How do I book a Gypsy Tour?",
                  a: "Download the full tour guide above to get booking information, prices, and detailed schedules for each port. All booking details and contact information are included in the complete guide."
                },
                {
                  q: "What should I bring on shore excursions?",
                  a: "Essentials include sunscreen, water shoes, waterproof phone case, cash for local vendors, and appropriate clothing for your chosen activity level. Specific packing lists are included in the full guide."
                },
                {
                  q: "How do I leave a review?",
                  a: "Use the review form above to rate your Gypsy Tours experience with Krystals (1-5) and share your adventure with future travelers. Your feedback helps others choose their perfect tours!"
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md">
                  <details className="p-6">
                    <summary className="font-bold text-lg text-teal-700 cursor-pointer hover:text-teal-800">
                      {faq.q}
                    </summary>
                    <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
                  </details>
                </div>
              ))}
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  )
}