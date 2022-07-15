module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss')('src/styles/tailwind.config.js'),
        require('autoprefixer'),
      ],
    },
  },
};
