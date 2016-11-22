import webpackConfig from '../build/webpack.config';

const karmaConfig = {
  basePath: '../',
  files: [
    './src/**/*.spec.js',
  ],
  plugins: [
    'karma-mocha',
    'karma-mocha-reporter',
    'karma-webpack',
    'karma-phantomjs-launcher',
  ],
  browsers: ['PhantomJS'],
  singleRun: true,
  frameworks: ['mocha'],
  reporters: ['mocha'],
  preprocessors: {
    './src/**/*.js': ['webpack'],
  },
  webpackMiddleware: {
    stats: {
      chunks: false,
    },
  },
  webpack: {
    ...webpackConfig,
    externals: {
      jsdom: 'window',
      cheerio: 'window',
      'react/lib/ReactContext': 'window',
      'react/lib/ExecutionEnvironment': true,
      'react/addons': true,
    },
  },
};

module.exports = cfg => cfg.set(karmaConfig);
