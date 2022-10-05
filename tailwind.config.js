/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['IBM Plex Sans Thai Looped'],
      },
    },
  },
  daisyui:{
    themes:['forest']
  },

  plugins: [require("daisyui")],
}
