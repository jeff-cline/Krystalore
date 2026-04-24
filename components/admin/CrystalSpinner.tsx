'use client'

interface CrystalSpinnerProps {
  size?: number
  className?: string
}

export default function CrystalSpinner({ size = 18, className = '' }: CrystalSpinnerProps) {
  return (
    <span
      className={`inline-block ${className}`}
      style={{
        width: size,
        height: size,
        animation: 'krystal-spin 1.1s linear infinite',
        backgroundImage: 'url(/krystalore-crystal.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        filter: 'drop-shadow(0 0 4px rgba(52,197,197,0.5))',
      }}
      aria-label="Loading"
      role="img"
    >
      <style jsx>{`
        @keyframes krystal-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </span>
  )
}
