const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withFonts = require('next-fonts');
const withImages = require('next-optimized-images');
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
    [
      withImages,
      {
        handleImages: ['jpeg', 'png', 'webp', 'gif']
      }
    ],
    withFonts,
    [withBundleAnalyzer]
  ],
  {
    target: 'serverless',
    poweredByHeader: false,
    typescript: {
      ignoreBuildErrors: true
    },
    images: {
      deviceSizes: [480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      domains: [
        'images.prismic.io',
        'prismic-io.s3.amazonaws.com',
        'madeleineostoja.cdn.prismic.io',
        /* development */ 'source.unsplash.com'
      ]
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
