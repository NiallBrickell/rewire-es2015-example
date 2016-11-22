var webpackConfig = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: 'dist/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)/,
        loader: 'babel',
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = webpackConfig;
