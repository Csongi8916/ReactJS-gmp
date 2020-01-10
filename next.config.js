const path = require('path');
const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");

module.exports = withCSS(withSass({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        modules: [...config.resolve.modules, path.resolve(__dirname, 'src'), 'node_modules']
      }
    };
  }
}));
