/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      mobile: { min: '320px', max: '768px' },
      tablet: { min: '768px', max: '1024px' },
      laptop: { min: '1024px', max: '1280px' },
      desktop: { min: '1280px' }
    }
  },
  plugins: [],
}

