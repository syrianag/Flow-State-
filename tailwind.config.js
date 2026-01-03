/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1D1E',
        'soft-white': '#E8E6E3',
        sage: '#7A9B77',
        teal: '#5B8A9A',
        gray: '#A8A6A3',
        'card-dark': '#242729',
      },
    },
  },
  plugins: [],
}
