/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const sass = require('sass');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        implementation: sass,
        includePaths: [path.join(__dirname, 'node_modules')],
      },
    },
  },
};
