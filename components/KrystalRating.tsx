'use client'

import React from 'react'

interface KrystalRatingProps {
  rating: number
  size?: 'sm' | 'md' | 'lg'
  interactive?: boolean
  onChange?: (n: number) => void
}

export default function KrystalRating({ rating, size = 'md', interactive = false, onChange }: KrystalRatingProps) {
  const sizeMap = { sm: 24, md: 36, lg: 52 }
  const px = sizeMap[size]

  return (
    <div className="flex gap-1.5 items-center">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          disabled={!interactive}
          onClick={() => onChange?.(i)}
          className={`${interactive ? 'cursor-pointer hover:scale-125' : 'cursor-default'} focus:outline-none transform transition-all duration-200`}
          style={{ width: px, height: px }}
          aria-label={`${i} krystal${i > 1 ? 's' : ''}`}
        >
          <svg
            viewBox="0 0 100 120"
            width={px}
            height={px}
            className={i <= rating ? 'drop-shadow-lg' : 'opacity-40'}
          >
            <defs>
              {/* Shimmer gradient that animates */}
              <linearGradient id={`krystal-shimmer-${i}-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2dd4bf">
                  <animate attributeName="stop-color" values="#2dd4bf;#06b6d4;#10b981;#2dd4bf" dur="3s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
                </stop>
                <stop offset="35%" stopColor="#06b6d4">
                  <animate attributeName="stop-color" values="#06b6d4;#10b981;#2dd4bf;#06b6d4" dur="3s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
                </stop>
                <stop offset="65%" stopColor="#10b981">
                  <animate attributeName="stop-color" values="#10b981;#2dd4bf;#06b6d4;#10b981" dur="3s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
                </stop>
                <stop offset="100%" stopColor="#0d9488">
                  <animate attributeName="stop-color" values="#0d9488;#2dd4bf;#10b981;#0d9488" dur="3s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
                </stop>
              </linearGradient>

              {/* Bright shimmer highlight that sweeps across */}
              <linearGradient id={`krystal-shine-${i}-${size}`} x1="-100%" y1="0%" x2="200%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="45%" stopColor="rgba(255,255,255,0)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.7)" />
                <stop offset="55%" stopColor="rgba(255,255,255,0)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                <animateTransform
                  attributeName="gradientTransform"
                  type="translate"
                  from="-1 0"
                  to="2 0"
                  dur="2.5s"
                  repeatCount="indefinite"
                  begin={`${i * 0.5}s`}
                />
              </linearGradient>

              {/* Inner glow filter */}
              <filter id={`krystal-glow-${i}-${size}`}>
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Main krystal shape - faceted gem */}
            {i <= rating ? (
              <g>
                {/* Shadow/depth */}
                <polygon
                  points="50,5 85,35 75,95 50,115 25,95 15,35"
                  fill="rgba(0,0,0,0.2)"
                  transform="translate(2,2)"
                />

                {/* Main body */}
                <polygon
                  points="50,5 85,35 75,95 50,115 25,95 15,35"
                  fill={`url(#krystal-shimmer-${i}-${size})`}
                  stroke="#0d9488"
                  strokeWidth="1.5"
                />

                {/* Top facet - lighter */}
                <polygon
                  points="50,5 85,35 50,50 15,35"
                  fill="rgba(255,255,255,0.15)"
                />

                {/* Left facet */}
                <polygon
                  points="15,35 50,50 25,95"
                  fill="rgba(0,0,0,0.1)"
                />

                {/* Right facet */}
                <polygon
                  points="85,35 75,95 50,50"
                  fill="rgba(255,255,255,0.08)"
                />

                {/* Bottom facet */}
                <polygon
                  points="50,50 75,95 50,115 25,95"
                  fill="rgba(0,0,0,0.05)"
                />

                {/* Inner facet lines */}
                <line x1="50" y1="5" x2="50" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="50" y2="115" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <line x1="15" y1="35" x2="75" y2="95" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                <line x1="85" y1="35" x2="25" y2="95" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />

                {/* Shimmer sweep overlay */}
                <polygon
                  points="50,5 85,35 75,95 50,115 25,95 15,35"
                  fill={`url(#krystal-shine-${i}-${size})`}
                />

                {/* Sparkle highlight dot */}
                <circle cx="38" cy="25" r="3" fill="white" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                  <animate attributeName="r" values="3;2;3" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                </circle>

                {/* Second sparkle */}
                <circle cx="62" cy="65" r="2" fill="white" opacity="0.4">
                  <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.8s" repeatCount="indefinite" begin={`${i * 0.6}s`} />
                </circle>
              </g>
            ) : (
              /* Unfilled / gray krystal */
              <g opacity="0.5">
                <polygon
                  points="50,5 85,35 75,95 50,115 25,95 15,35"
                  fill="#374151"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                />
                <polygon
                  points="50,5 85,35 50,50 15,35"
                  fill="rgba(255,255,255,0.05)"
                />
                <line x1="50" y1="5" x2="50" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="50" y2="115" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              </g>
            )}
          </svg>
        </button>
      ))}
    </div>
  )
}
