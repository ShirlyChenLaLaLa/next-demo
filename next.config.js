const path = require('path');
const withSourceMaps = require('@zeit/next-source-maps');

const alias = {
  '~theme': path.join(__dirname, 'theme'),
  '~components': path.join(__dirname, 'components'),
};

module.exports = withSourceMaps({
  webpack: (config, { module, buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.resolve.alias = { ...config.resolve.alias, ...alias };
    return config;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
  distDir: 'build',
});
