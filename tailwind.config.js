/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#635DFF', // Figma purple
          light: '#A58AFF',
          dark: '#4F46E5',
        },
        accent: {
          yellow: '#FFCB52',
          green: '#68D391',
          blue: '#60A5FA',
          pink: '#F472B6',
        },
        sidebar: '#F5F6FA',
        card: '#FFF',
        border: '#E5E7EB',
        graybg: '#F6F6F6',
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(54, 78, 126, 0.04)',
      },
      borderRadius: {
        xl: '1.25rem',
      },
    },
  },
  plugins: [],
} 