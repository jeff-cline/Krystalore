'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

interface ImageItem {
  src: string;
  alt: string;
}

interface Category {
  id: string;
  title: string;
  description: string;
  images: ImageItem[];
}

export default function ImagesPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>('');

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage(src);
    setLightboxAlt(alt);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxAlt('');
  };

  const categories: Category[] = [
    {
      id: 'speaking',
      title: 'On Stage & Speaking',
      description: 'Keynote presentations, speaking engagements, and inspiring audiences with powerful messages of resilience and empowerment.',
      images: [
        { src: '/images/scraped/speaker-stage.jpg', alt: 'Krystalore on stage in white dress with Level Up screen behind' },
        { src: '/images/scraped/speaking.jpg', alt: 'Krystalore at WNY Heroes event in white blazer' },
        { src: '/images/krystalore/wny-heroes-speaking.png', alt: 'Krystalore speaking with headset microphone' },
        { src: '/images/scraped/krystalore-coaching-headshot.jpg', alt: 'Krystalore at live coaching event with name tag' },
        { src: '/images/scraped/krystalore-speaking-2.jpg', alt: 'Krystalore speaking photo 2' },
        { src: '/images/krystalore/speaker-event-ros.jpg', alt: 'Krystalore at speaking event' },
      ]
    },
    {
      id: 'leadership',
      title: 'Leadership & Coaching',
      description: 'Executive coaching sessions, corporate workshops, and leadership training programs that transform teams and individuals.',
      images: [
        { src: '/images/scraped/krystalore-event.jpg', alt: 'Krystalore at desk in blazer with book and coffee during coaching session' },
        { src: '/images/scraped/leadership-hero-opt.jpg', alt: 'Corporate team workshop facilitation' },
        { src: '/images/scraped/leadership-team-1.jpg', alt: 'Team collaboration and leadership development session' },
        { src: '/images/scraped/leadership-team-2.jpg', alt: 'Interactive leadership team workshop' },
        { src: '/images/scraped/leadership-team-3.jpg', alt: 'Team building and leadership coaching session' },
        { src: '/images/scraped/leadership-workshop.jpg', alt: 'Leadership development workshop event' },
        { src: '/images/scraped/leadership-event.jpg', alt: 'Professional portrait in blazer with mirror transformation theme' },
        { src: '/images/scraped/leadership-corporate-opt.jpg', alt: 'Corporate leadership training setting' },
      ]
    },
    {
      id: 'fitness',
      title: 'Fitness & Wellness',
      description: 'High-energy fitness classes, wellness programs, and the revolutionary 34-Minute Mindset approach to holistic health.',
      images: [
        { src: '/images/scraped/section-bg-3-opt.jpg', alt: 'Krystalore in athletic wear demonstrating runner position' },
        { src: '/images/scraped/fitness-group-outdoor.jpg', alt: 'Krystalore fitness portrait in gym setting' },
        { src: '/images/scraped/fitness-class-1.jpg', alt: 'High-energy fitness class session' },
        { src: '/images/scraped/fitness-class-2.jpg', alt: 'Crews Coach fitness academy training' },
        { src: '/images/scraped/krystalore-fitness.webp', alt: 'Krystalore fitness and wellness shot' },
      ]
    },
    {
      id: 'retreats',
      title: 'Retreats & Adventures',
      description: 'Transformative retreat experiences in Puerto Rico featuring luxury accommodations, sisterhood, and life-changing adventures.',
      images: [
        { src: '/images/retreat/retreat-01.jpg', alt: 'Luxury retreat infinity pool overlooking ocean in Puerto Rico' },
        { src: '/images/retreat/retreat-02.jpg', alt: 'Retreat experience photo 2' },
        { src: '/images/retreat/retreat-03.jpg', alt: 'Retreat experience photo 3' },
        { src: '/images/retreat/retreat-04.jpg', alt: 'Retreat experience photo 4' },
        { src: '/images/retreat/retreat-05.jpg', alt: 'Retreat experience photo 5' },
        { src: '/images/retreat/retreat-group-01.jpg', alt: 'Women retreat group bonding on beach' },
        { src: '/images/retreat/retreat-group-02.jpg', alt: 'Retreat group experience photo 2' },
        { src: '/images/retreat/retreat-group-03.jpg', alt: 'Women celebrating together at sunset retreat' },
        { src: '/images/retreat/retreat-group-04.jpg', alt: 'Retreat group experience photo 4' },
        { src: '/images/retreat/retreat-group-05.jpg', alt: 'Retreat group experience photo 5' },
        { src: '/images/retreat/retreat-group-06.jpg', alt: 'Retreat group experience photo 6' },
        { src: '/images/scraped/leadership-training-opt.jpg', alt: 'Tropical resort leadership training collage' },
      ]
    },
    {
      id: 'books',
      title: 'Books & Media',
      description: 'Published works including bestselling books, podcast appearances, and media featuring Krystalore\'s transformational content.',
      images: [
        { src: '/images/scraped/book-krystalore.jpg', alt: 'Krystalore holding her book against artistic mural background' },
        { src: '/images/scraped/book-milspouse-opt.jpg', alt: 'Leave No MilSpouse Behind book cover featuring military spouse stories' },
        { src: '/images/scraped/book-resilience-opt.jpg', alt: 'The Road to Resilience book cover about building confidence' },
        { src: '/images/scraped/book-planner-opt.jpg', alt: 'Krystal Clear Life Planner cover for goal setting' },
        { src: '/images/scraped/retreat-experiences-opt.jpg', alt: 'Podcast microphone and life planner content collage' },
        { src: '/images/scraped/podcast-cover-opt.jpg', alt: 'Krystal Clear Life Podcast official artwork' },
        { src: '/images/scraped/krystalore-keynote.jpg', alt: 'Krystalore writing in journal during keynote preparation' },
      ]
    },
    {
      id: 'press',
      title: 'Press & Testimonials',
      description: 'Media coverage, testimonials, and recognition highlighting Krystalore\'s impact and transformational work.',
      images: [
        { src: '/images/scraped/krystalore-leadership.webp', alt: 'Krystalore featured on Global Woman Magazine cover' },
        { src: '/images/scraped/books-blog-opt.jpg', alt: 'Winter Warrior testimonial and client success story' },
        { src: '/images/scraped/recommendations-opt.jpg', alt: 'Text testimonial from satisfied client' },
        { src: '/images/scraped/publications-opt.jpg', alt: 'Facebook testimonial and social media recognition' },
      ]
    },
    {
      id: 'about',
      title: 'About Krystalore',
      description: 'Professional portraits, credentials, and the story behind The Crews Coach brand and mission.',
      images: [
        { src: '/images/scraped/krystalore-profile-opt.jpg', alt: 'Krystalore Crews professional portrait headshot' },
        { src: '/images/scraped/krystalore-bio-fitness.jpg', alt: 'Branded card showing Krystalore\'s multiple professional roles' },
        { src: '/images/scraped/credentials-opt.jpg', alt: 'Professional certifications and credentials display' },
        { src: '/images/scraped/about-hero.webp', alt: 'About page hero image showcasing Krystalore\'s story' },
        { src: '/images/scraped/krystalore-about.png', alt: 'Official Krystalore Crews logo and branding' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 max-w-4xl mx-auto">
            Journey through the moments that define transformation, empowerment, and limitless potential.
          </p>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="whitespace-nowrap text-sm font-semibold text-gray-600 hover:text-teal-600 transition-colors duration-200 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(category.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Gallery Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {categories.map((category) => (
          <section key={category.id} id={category.id} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Masonry Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {category.images.map((image, index) => (
                <div
                  key={index}
                  className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={() => openLightbox(image.src, image.alt)}
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Create Your Own Transformation?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of women who have discovered their limitless potential through Krystalore's programs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block"
            >
              Book a Discovery Call
            </Link>
            <Link 
              href="/go" 
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* JC Easter Egg */}
      <div className="text-center py-4">
        <a href="https://jeff-cline.com" className="text-[6px] opacity-[0.08]">JC</a>
      </div>

      <Footer />

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative">
              <Image
                src={lightboxImage}
                alt={lightboxAlt}
                width={1200}
                height={800}
                className="max-w-full max-h-screen object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}