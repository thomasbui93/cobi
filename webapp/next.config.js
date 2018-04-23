const withSass = require('@zeit/next-sass')
const bourbon = require('node-bourbon');
const neat = require('node-neat');

module.exports = withSass({
  sassLoaderOptions: {
    includePaths: [bourbon.includePaths, neat.includePaths, './node_modules/bulma']
  }
});