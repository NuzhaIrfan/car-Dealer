module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',  // Darker purple for light mode text
          900: '#581c87',  // Darkest purple for shadows
          950: '#3b0764'   // Ultra dark for dark mode accents
        },
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(107, 33, 168, 0.2), 0 10px 10px -5px rgba(107, 33, 168, 0.1)',
        'card-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.25), 0 2px 4px -1px rgba(0, 0, 0, 0.15)',
        'card-hover-dark': '0 20px 25px -5px rgba(76, 29, 149, 0.3), 0 10px 10px -5px rgba(76, 29, 149, 0.1)'
      },
      animation: {
        'flip': 'flip 1s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'pop': 'pop 0.3s ease-out'
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(180deg)' }
        },
        pop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' }
        }
      }
    },
  },
  plugins: [
   
    
  ],
}