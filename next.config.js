const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withPreact = require('next-plugin-preact');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withPlugins(
  [
    withPreact,
    [
      withPWA,
      {
        pwa: { dest: 'public', disable: process.env.NODE_ENV === 'development' }
      }
    ],
    [withBundleAnalyzer]
  ],
  {
    target: 'serverless',
    poweredByHeader: false,
    future: {
      webpack5: true
    },
    typescript: {
      ignoreBuildErrors: true
    },
    webpack: (config) => {
      // Add SVGR support
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
      });

      return config;
    }
  }
);
