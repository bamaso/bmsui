var path = require('path')
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    bmsui: './src/components/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: './',
    filename: 'bmsui.js',
    library: 'bmsui',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets')
    }
  },
  stats: {
    children: false
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      },
      {
          test:  /\.scss$/,
          loader:  ExtractTextPlugin.extract('css!sass')
      },
      {
          test   : /\.woff/,
          loader : 'url?prefix=font/&limit=10000&mimetype=application/font-woff'
      }, {
          test   : /\.ttf/,
          loader : 'file?prefix=font/'
      }, {
          test   : /\.eot/,
          loader : 'file?prefix=font/'
      }, {
          test   : /\.svg/,
          loader : 'file?prefix=font/'
      }
    ]
  },
  postcss: function () {
      return [autoprefixer];
  },
  vue: {
    loaders: {
      js: 'babel!eslint'
    }
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}