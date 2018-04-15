const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const routes = require('./routes.json');

module.exports = withTypescript(withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  webpack(config, options) {
    // Further custom configuration here
    return config
  },
  exportPathMap: () => {
    return routes;
  }
}));