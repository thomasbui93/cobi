const withSass = require('@zeit/next-sass')
const routes = require('./routes.json');
const bourbon = require('node-bourbon');
const neat = require('node-neat');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  sassLoaderOptions: {
    includePaths: [bourbon.includePaths, neat.includePaths]
  },
  exportPathMap: () => {
    return routes;
  }
});