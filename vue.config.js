/* eslint-disable import/no-extraneous-dependencies */

const sass = require('sass');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        implementation: sass,
      },
    },
  },
};
