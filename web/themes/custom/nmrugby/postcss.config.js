const autoPrefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoPrefixer(),
    require('postcss-media-variables')
  ],
};
