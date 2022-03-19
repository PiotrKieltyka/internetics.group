module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'media',
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: process.env.NODE_ENV && 'jit',
};
