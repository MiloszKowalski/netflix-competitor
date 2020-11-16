module.exports = {
  style: {
    postcss: {
      parser: 'postcss-scss',
      plugins: [
        require("tailwindcss")("./tailwind.config.js")
      ],
    },
  },
};