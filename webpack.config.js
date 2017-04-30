var path = require('path');

module.exports = {
  entry: {
    polyfills: './frontend/src/polyfills.ts',
    main: './frontend/src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: [
          { loader: 'ts-loader' }
        ]
      }
    ]
  }
};
