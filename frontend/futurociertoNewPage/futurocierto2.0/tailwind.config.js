/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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

