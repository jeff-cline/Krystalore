'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/Footer';

const characters = [
  {
    id: 'gypsy-tours',
    title: 'The Gypsy Tour Guide',
    subtitle: 'San Juan Social Club',
    description: 'Captain\'s hat, "GYPSY TOURS" flag, Caribbean beach, cruise ship in the background. The original that started it all.',
    image: '/images/logos/00-gypsy-tours-original.png',
    tags: ['Travel', 'Adventure', 'Caribbean', 'Cruise'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    id: 'entrepreneur',
    title: 'The Boss',
    subtitle: 'Badass Entrepreneur',
    description: 'Teal power suit, emerald jewelry, glowing briefcase, city rooftop with skyscrapers. Running empires before breakfast.',
    image: '/images/logos/01-entrepreneur.png',
    tags: ['Business', 'Leadership', 'CEO', 'Empire'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'mountain-climber',
    title: 'The Summit Seeker',
    subtitle: 'Lara Croft Energy',
    description: 'Scaling mountain cliff faces with emerald carabiners, hair flowing in the wind. No summit too high, no challenge too steep.',
    image: '/images/logos/02-mountain-climber.png',
    tags: ['Adventure', 'Climbing', 'Fearless', 'Explorer'],
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'bikini-model',
    title: 'The Bronze Goddess',
    subtitle: 'Beach Supermodel',
    description: 'White bikini, deep bronze tan, ocean waves, pink sunset. Confidence radiates. The beach bows.',
    image: '/images/logos/03-bikini-model.png',
    tags: ['Beach', 'Model', 'Goddess', 'Confidence'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'runner',
    title: 'The Speed Demon',
    subtitle: 'Athletic Champion',
    description: 'Full sprint on a beach boardwalk, teal sports outfit, hair streaming. She doesn\'t chase dreams — she outruns them.',
    image: '/images/logos/04-runner.png',
    tags: ['Fitness', 'Running', 'Athlete', 'Champion'],
    color: 'from-sky-500 to-blue-500',
  },
  {
    id: 'cruise-hostess',
    title: 'The Party Queen',
    subtitle: 'Cruise Ship Hostess',
    description: 'Pool deck, tropical cocktail, DJ booth, colorful floaties. Every party needs a captain — she IS the captain.',
    image: '/images/logos/05-cruise-hostess.png',
    tags: ['Cruise', 'Party', 'Hostess', 'Tropical'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 'superwoman',
    title: 'The Superwoman',
    subtitle: 'Cape & All',
    description: 'Floating in the sky, teal and pink cape flowing, emerald diamond emblem. Not all heroes wear capes — but she does.',
    image: '/images/logos/06-superwoman.png',
    tags: ['Superhero', 'Power', 'Flying', 'Unstoppable'],
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 'retreat-meditation',
    title: 'The Zen Master',
    subtitle: 'POD Ceremony',
    description: 'Cross-legged meditation, candles, emerald crystals, ocean view. Inner peace meets outer fierceness.',
    image: '/images/logos/07-retreat-meditation.png',
    tags: ['Wellness', 'Meditation', 'Retreat', 'Spiritual'],
    color: 'from-teal-400 to-emerald-400',
  },
  {
    id: 'waterfall-rappel',
    title: 'The Jungle Queen',
    subtitle: 'Waterfall Warrior',
    description: 'Rappelling a massive waterfall in lush tropical jungle, exotic birds, dense foliage. Nature is her playground.',
    image: '/images/logos/08-waterfall-rappel.png',
    tags: ['Jungle', 'Waterfall', 'Rappelling', 'Wild'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'military',
    title: 'The Commander',
    subtitle: 'Military Badass',
    description: 'Teal camo fatigues, combat boots, dog tags, beret with emerald pin. MilSpouse turned warrior queen.',
    image: '/images/logos/09-military.png',
    tags: ['Military', 'Warrior', 'Commander', 'Strength'],
    color: 'from-slate-500 to-gray-600',
  },
  {
    id: 'phd-graduate',
    title: 'The Scholar',
    subtitle: 'PhD Level Genius',
    description: 'Graduation cap and gown, diploma, golden trophy, confetti. Brains and beauty — a dangerous combination.',
    image: '/images/logos/10-phd-graduate.png',
    tags: ['Education', 'PhD', 'Scholar', 'Achievement'],
    color: 'from-indigo-500 to-blue-600',
  },
  {
    id: 'dress-teal',
    title: 'The Teal Sparkle',
    subtitle: 'Island Glamour',
    description: 'Floor-length teal dress dripping in sparkles and sequins, hair in an elegant bun, tiara catching golden hour light on the beach. Every sunset is her runway.',
    image: '/images/logos/dress-teal-sparkle.png',
    tags: ['Fashion', 'Island', 'Sparkle', 'Glamour'],
    color: 'from-teal-400 to-cyan-500',
  },
  {
    id: 'dress-green',
    title: 'The Tropical Queen',
    subtitle: 'Garden Goddess',
    description: 'Lush green tropical dress with palm leaf and hibiscus print, flowing elegantly through a Caribbean garden. Nature wears her.',
    image: '/images/logos/dress-green-tropical.png',
    tags: ['Tropical', 'Garden', 'Nature', 'Elegant'],
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 'dress-blue',
    title: 'The Festival Queen',
    subtitle: 'Blue Bohemian',
    description: 'Royal blue festival dress with bohemian patterns and sparkle shoes, string lights and lanterns behind her. She IS the festival.',
    image: '/images/logos/dress-blue-festival.png',
    tags: ['Festival', 'Blue', 'Bohemian', 'Party'],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 'gypsy-tours-precruise',
    title: 'The Gypsy Tours Host',
    subtitle: 'Pre-Cruise Meetup',
    description: 'Teal island dress, sparkly shoes, leaning on the Gypsy Tours tiki bar with a rum punch in hand. Teal crystals on the sand, tiki torches blazing, cruise ship on the horizon, sunrise painting the sky. The ultimate pre-cruise networking queen.',
    image: '/images/logos/krystalore-gypsy-tours-precruise.png',
    tags: ['Gypsy Tours', 'Pre-Cruise', 'Networking', 'Beach Event'],
    color: 'from-teal-500 to-orange-500',
  },
  {
    id: 'habit-tracker',
    title: 'The Habit Queen',
    subtitle: '34-Minute Mindset',
    description: 'Journaling at her desk with the 34-minute timer running, books stacked beside her — Road to Resilience, Krystal Clear Life Planner, Crews Beyond Limits. Laptop open, ocean view through the window, sunshine making every crystal sparkle. Building empires one habit at a time.',
    image: '/images/logos/11-habit-tracker.png',
    tags: ['Habits', 'Journaling', 'Planner', '34-Minute Mindset'],
    color: 'from-teal-500 to-pink-500',
  },
  {
    id: 'floor-journaling',
    title: 'The Grounded Planner',
    subtitle: 'Floor Flow Journaling',
    description: 'Cross-legged on the yoga mat, Crews Beyond Limits tank, planner open with reflection pages and goal tracking. Smartwatch counting the minutes, sneakers still on. She plans her empire from the floor up.',
    image: '/images/logos/12-floor-journaling.png',
    tags: ['Journaling', 'Yoga', 'Mindset', 'Goals'],
    color: 'from-teal-400 to-pink-400',
  },
  {
    id: 'cruise-cabin-planning',
    title: 'The Cruise Planner',
    subtitle: 'Cabin Strategy Session',
    description: 'Ocean sunset pouring through the cabin window, planners and notebooks spread across the desk, pen in hand, chin resting on the other. She makes big moves from small cabins.',
    image: '/images/logos/13-cruise-cabin-planning.png',
    tags: ['Cruise', 'Planning', 'Ocean', 'Strategy'],
    color: 'from-orange-500 to-pink-500',
  },
  {
    id: 'retreat-workshop',
    title: 'The Retreat Leader',
    subtitle: 'What\'s Next?!',
    description: 'Standing at the flip chart in a tropical villa, palm trees and pool through the archway behind her. Accountability, Community, Habit Tracker, Fitness, Bombshell Bootcamp — she wrote the damn list.',
    image: '/images/logos/14-retreat-workshop.png',
    tags: ['Retreat', 'Workshop', 'Leadership', 'Tropical'],
    color: 'from-pink-500 to-teal-500',
  },
  {
    id: 'floor-stretch-journaling',
    title: 'The Stretch & Plan',
    subtitle: 'Athletic Journaling',
    description: 'Full stretch on the hardwood floor, water bottle at the ready, planner open, pen moving. She doesn\'t separate fitness from planning — they\'re the same discipline.',
    image: '/images/logos/15-floor-stretch-journaling.png',
    tags: ['Fitness', 'Journaling', 'Stretch', 'Discipline'],
    color: 'from-cyan-500 to-teal-500',
  },
  {
    id: 'exercise-running-man',
    title: 'The Speed Machine',
    subtitle: 'Beyond Limits Cardio',
    description: 'High knees on the sand, "Beyond Limits" across her chest, palm trees swaying, yoga mat branded and ready. She doesn\'t jog — she attacks.',
    image: '/images/logos/16-exercise-running-man.png',
    tags: ['Cardio', 'Running', 'Beach', 'Beyond Limits'],
    color: 'from-teal-500 to-sky-500',
  },
  {
    id: 'exercise-pushups',
    title: 'The Floor Boss',
    subtitle: 'Show Up. Work Hard.',
    description: 'Push-ups on the beach, perfect form, "Show Up. Work Hard." blazed across her tank. The sand doesn\'t care about your excuses.',
    image: '/images/logos/17-exercise-pushups.png',
    tags: ['Strength', 'Push-ups', 'Beach', 'Discipline'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'exercise-burpees',
    title: 'The Explosive',
    subtitle: 'THRIVE Mode',
    description: 'Mid-burpee explosion, arms reaching for the sky, "THRIVE" crop top, sand flying. She makes the hardest exercise look like a celebration.',
    image: '/images/logos/18-exercise-burpees.png',
    tags: ['HIIT', 'Burpees', 'Beach', 'THRIVE'],
    color: 'from-pink-500 to-teal-500',
  },
  {
    id: 'exercise-kickboxing',
    title: 'The Knockout',
    subtitle: 'Bombshell Bootcamp',
    description: 'Roundhouse kick on the beach, wrapped hands, fierce eyes, "Bombshell Bootcamp" across her chest. She didn\'t come to play — she came to fight.',
    image: '/images/logos/19-exercise-kickboxing.png',
    tags: ['Kickboxing', 'Bootcamp', 'Beach', 'Fierce'],
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 'exercise-karate-hoodie',
    title: 'The Warrior',
    subtitle: 'Hood Up. Muscles Out.',
    description: 'Sleeveless teal hoodie, hood up, strings hanging, bronze arms on full display. Karate stance on the sand with ring light rolling. She films her own legend.',
    image: '/images/logos/20-exercise-karate-hoodie.png',
    tags: ['Karate', 'Hoodie', 'Beach', 'Warrior'],
    color: 'from-teal-600 to-gray-600',
  },
  {
    id: 'beach-fitness-live',
    title: 'The Live Coach',
    subtitle: 'Beach Broadcast',
    description: 'Ring light glowing, tripod planted in the sand, teaching a live workout to the world. Sleeveless hoodie, hood up, arms raised coaching. The beach is her studio.',
    image: '/images/logos/21-beach-fitness-live.png',
    tags: ['Live', 'Coaching', 'Beach', 'Broadcast'],
    color: 'from-teal-500 to-orange-500',
  },
  {
    id: 'beach-fitness-group',
    title: 'The Class Leader',
    subtitle: 'Beyond Limits Beach Class',
    description: 'Leading the group on the sand, members following her every move on teal yoga mats. Ring light capturing it all. She builds tribes, not audiences.',
    image: '/images/logos/22-beach-fitness-group.png',
    tags: ['Group', 'Fitness', 'Beach', 'Community'],
    color: 'from-cyan-500 to-pink-500',
  },
  {
    id: 'networking-bar',
    title: 'The Connector',
    subtitle: 'Tiki Bar Networking',
    description: 'Sparkly teal blazer, cocktail in hand, leaning against the bar with warm tropical lighting. She doesn\'t network — she collects future partners.',
    image: '/images/logos/23-networking-bar.png',
    tags: ['Networking', 'Social', 'Cocktails', 'Business'],
    color: 'from-amber-500 to-teal-500',
  },
  {
    id: 'business-speaking',
    title: 'The Keynote',
    subtitle: 'Lead Beyond Limits',
    description: 'Standing at the front of the room, teal blazer gleaming, teaching business owners who came for strategy and left transformed. Confidence is contagious.',
    image: '/images/logos/24-business-speaking.png',
    tags: ['Speaking', 'Leadership', 'Business', 'Keynote'],
    color: 'from-indigo-500 to-teal-500',
  },
  {
    id: 'all-body-fitness',
    title: 'The Includer',
    subtitle: 'Every Body Welcome',
    description: 'Leading a class of every shape and size on the beach. "Krystal Clear" on her chest, smiles all around. Transformation doesn\'t have a dress code.',
    image: '/images/logos/25-all-body-fitness.png',
    tags: ['Inclusive', 'Fitness', 'Community', 'Beach'],
    color: 'from-pink-400 to-purple-500',
  },
  {
    id: 'cruise-amphitheater',
    title: 'The Main Stage',
    subtitle: 'Cruise Ship Keynote',
    description: 'Sparkly teal gown, amphitheater packed, LED screen behind her blazing with Beyond Limits branding, book covers, and the 34-Minute Protocol. The ocean is her backdrop. The world is her audience.',
    image: '/images/logos/26-cruise-amphitheater.png',
    tags: ['Cruise', 'Keynote', 'Stage', 'Branding'],
    color: 'from-violet-500 to-teal-500',
  },
  {
    id: 'spa-pedicure',
    title: 'The Pampered Queen',
    subtitle: 'Luxury Spa Day',
    description: 'Paisley sundress, crystal foot bath, wine glass within reach, phone in hand because empires don\'t stop for pedicures. She soaks her feet and closes deals simultaneously.',
    image: '/images/logos/27-spa-pedicure.png',
    tags: ['Spa', 'Luxury', 'Self-Care', 'Pedicure'],
    color: 'from-teal-400 to-blue-500',
  },
  {
    id: 'spa-relaxation',
    title: 'The Zen Queen',
    subtitle: 'Total Surrender',
    description: 'Leaned back, eyes closed, head tilted, pure bliss. Paisley dress, gold necklace catching the light. Even queens need to switch off — she just does it in style.',
    image: '/images/logos/28-spa-relaxation.png',
    tags: ['Spa', 'Relaxation', 'Zen', 'Self-Care'],
    color: 'from-pink-400 to-teal-400',
  },
  {
    id: 'keynote-speaker',
    title: 'The Keynote',
    subtitle: 'Main Stage Energy',
    description: 'Sparkly teal blazer, podium, arm raised to the sky, crowd locked in. She doesn\'t just speak — she ignites. Every room she enters becomes her stage.',
    image: '/images/logos/keynote-speaker.png',
    tags: ['Speaking', 'Keynote', 'Stage', 'Leadership'],
    color: 'from-teal-500 to-pink-500',
  },
  {
    id: 'podcast-host',
    title: 'Teal Talk',
    subtitle: 'Behind the Mic',
    description: 'Headphones on, mic hot, hands talking as fast as her brain. The "Teal Talk" mug says it all. She turns conversations into movements.',
    image: '/images/logos/podcast-host.png',
    tags: ['Podcast', 'Media', 'Speaking', 'Teal Talk'],
    color: 'from-purple-500 to-teal-400',
  },
  {
    id: 'corporate-wellness-leadership',
    title: 'The Boardroom Boss',
    subtitle: 'Corporate Leadership',
    description: 'Professional teal blazer, boardroom full of executives, presentation screen lit up. She teaches leadership like she lives it -- from the front.',
    image: '/images/logos/29-corporate-wellness-leadership.png',
    tags: ['Corporate', 'Leadership', 'Wellness', 'Teaching'],
    color: 'from-teal-600 to-blue-600',
  },
  {
    id: 'beach-networking',
    title: 'Island Connections',
    subtitle: 'Caribbean Networking',
    description: 'Tiki bar, cocktail umbrella, cruise ship on the horizon, teal crystals scattered in the sand. She networks where others vacation. Business never looked this good.',
    image: '/images/logos/krystalore-beach-networking-event.png',
    tags: ['Networking', 'Beach', 'Caribbean', 'Cruise'],
    color: 'from-orange-400 to-teal-500',
  },
];

export default function LogosPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-300 text-sm font-medium tracking-wider uppercase">Character Collection</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
            The Many Faces of{' '}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Krystalore
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            NFL cheerleader meets Lara Croft meets military commander meets supermodel meets 
            business badass meets PhD scholar meets super bronze goddess meets... well, you get the idea.
          </p>
          <p className="text-lg text-teal-400/80 font-medium">
            Every version of her could kick your ass. Choose wisely.
          </p>
        </div>
      </section>

      {/* Character Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((char) => (
            <div
              key={char.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-teal-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-2"
              onMouseEnter={() => setHoveredId(char.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div 
                className="relative aspect-video overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(char.image)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${char.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <img
                  src={char.image}
                  alt={char.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                
                {/* Hover overlay */}
                <div className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${hoveredId === char.id ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
                    Click to Enlarge
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                      {char.title}
                    </h3>
                    <p className="text-sm text-teal-400/80 font-medium">{char.subtitle}</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${char.color} ring-2 ring-gray-800 mt-1`} />
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {char.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {char.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-700/50 text-gray-300 border border-gray-600/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Characters', value: '33' },
            { label: 'Dimensions', value: 'Infinite' },
            { label: 'Sass Level', value: '100%' },
            { label: 'Bronze Tan', value: 'Deep' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-gray-800/30 border border-gray-700/30">
              <div className="text-2xl font-black bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Credit */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Generated with AI, inspired by the real thing. Every character carries her sparkly teal tiara, super white teeth, bright red lips, and that unmistakable energy.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-light transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Character fullscreen"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* JC Easter Egg */}
      <div className="text-center pb-2">
        <a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a>
      </div>

      <Footer />
    </div>
  );
}
