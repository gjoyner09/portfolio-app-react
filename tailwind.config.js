module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'poiret': ['Poiret One'],
     },
    extend: {
      backgroundImage: theme => ({
        'wedding': "url('/src/background-img/wedding.jpg')",
        'belize': "url('/src/background-img/belise-desktop.jpg')",
        'huddle': "url('/src/background-img/huddle-desktop.jpg')",
        'peoplemover': "url('/src/background-img/peoplemover-desktop-v2.jpg')",
        'vaucluse': "url('/src/background-img/vaucluse.jpg')",
      }),
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}
