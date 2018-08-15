const HtmlWebPackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';

const getEntry = () => {
  return isDev ? [
    'babel-polyfill',
    './src/index.js',
  ] : {
    main: ['./src/index.js'],
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
    ]
  }
};

module.exports = {
  name: 'client',
  target: 'web',
  devtool: isDev ? 'cheap-module-source-map' : false,
  entry: getEntry(),
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};
