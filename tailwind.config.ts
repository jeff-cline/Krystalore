import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Orange for admin (brand color)
        primary: {
          DEFAULT: '#FF8900',
          50: '#FFF4E6',
          100: '#FFE9CC',
          200: '#FFD399',
          300: '#FFBD66',
          400: '#FFA733',
          500: '#FF8900',
          600: '#CC6E00',
          700: '#995200',
          800: '#663700',
          900: '#331B00',
          950: '#1A0D00',
        },
        // Secondary - Diamond Teal palette
        secondary: {
          DEFAULT: '#34c5c5',
          50: '#e8f8f8',
          100: '#beeaea',
          200: '#a0e0e0',
          300: '#84d7d7',
          400: '#5ccece',
          500: '#34c5c5',
          600: '#37a6a6',
          700: '#2d8888',
          800: '#236a6a',
          900: '#1a4d4d',
          950: '#0f2e2e',
        },
        teal: {
          DEFAULT: '#34c5c5',
          50: '#e8f8f8',
          100: '#beeaea',
          200: '#a0e0e0',
          300: '#84d7d7',
          400: '#5ccece',
          500: '#34c5c5',
          600: '#37a6a6',
          700: '#2d8888',
          800: '#236a6a',
          900: '#1a4d4d',
          950: '#0f2e2e',
        },
        // Accent - Soft Coral
        coral: {
          DEFAULT: '#E07A5F',
          50: '#FDF3F0',
          100: '#FAE4DD',
          200: '#F4C7BA',
          300: '#EEAB97',
          400: '#E79278',
          500: '#E07A5F',
          600: '#D15E3F',
          700: '#B14A30',
          800: '#8F3C27',
          900: '#6E2F1E',
          950: '#3D1A11',
        },
        // Blue -> Lavender Glow (Pop color)
        blue: {
          DEFAULT: '#B8A9D4',
          50: '#F5F2FA',
          100: '#EBE5F4',
          200: '#D7CCE9',
          300: '#C7B9DF',
          400: '#B8A9D4',
          500: '#B8A9D4',
          600: '#9B88C0',
          700: '#7E67AC',
          800: '#634F8F',
          900: '#4A3B6B',
          950: '#2D2441',
        },
        // Highlight - Diamond Light (was Sage Green)
        sage: {
          DEFAULT: '#84d7d7',
          50: '#e8f8f8',
          100: '#beeaea',
          200: '#a0e0e0',
          300: '#84d7d7',
          400: '#5ccece',
          500: '#34c5c5',
          600: '#37a6a6',
          700: '#2d8888',
          800: '#236a6a',
          900: '#1a4d4d',
        },
        // Neutral grays - warmer tones
        gray: {
          50: '#F4F1EC',   // Morning Mist (Light background)
          100: '#E8E4DD',
          200: '#D5D0C8',
          300: '#B8B2A8',
          400: '#9A9488',
          500: '#7C7668',
          600: '#656055',
          700: '#4E4A42',
          800: '#2d3748',  // Dark text
          900: '#1a202c',  // Near black
          950: '#111827',
        },
        // Dark theme colors for admin interface
        dark: {
          DEFAULT: '#1A1A1A',
          50: '#F7F7F7',
          100: '#EFEFEF',
          200: '#DEDEDE',
          300: '#CCCCCC',
          400: '#AAAAAA',
          500: '#888888',
          600: '#666666',
          700: '#333333',
          800: '#1A1A1A',
          900: '#0D0D0D',
        },
      },
      backgroundColor: {
        'light-bg': '#F4F1EC',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
export default config