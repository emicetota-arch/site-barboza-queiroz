/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: '#883D52',
          dark: '#713042',
          light: '#9E4A62',
          subtle: '#F9F1F3',
          border: 'rgba(136, 61, 82, 0.22)',
        },
        slate: {
          DEFAULT: '#465456',
          light: '#5E6F72',
          dark: '#344143',
        },
        ink: {
          DEFAULT: '#263638',
          soft: '#38484A',
        },
        paper: {
          DEFAULT: '#FCFAF8',
          card: 'rgba(255, 255, 255, 0.92)',
        },
        'rose-soft': '#F6EEEE',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
        display: ['"Cinzel"', 'serif'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      boxShadow: {
        subtle: '0 4px 20px -2px rgba(38, 54, 56, 0.05)',
        card: '0 8px 30px -4px rgba(38, 54, 56, 0.08)',
        button: '0 4px 14px 0 rgba(136, 61, 82, 0.25)',
        'button-hover': '0 6px 20px 0 rgba(136, 61, 82, 0.35)',
      },
    },
  },
  plugins: [],
}
