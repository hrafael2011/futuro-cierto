/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      screens: {
        'custom1': '560px',
        'custom2': '375px',
        
      },
    },
  },
  plugins: [],
}

