const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var rules = [
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
        loaders: {
          i18n: '@kazupon/vue-i18n-loader'
        }
      }
  },
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      use: "css-loader"
    })
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  },
  {
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]?[hash]'
    }
  }
]

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'build.js'
  },
  module: {
    rules: rules
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false,
  },
  devtool: '#eval-source-map',
  plugins: [
	new webpack.DefinePlugin({
	    'process.env': {
	      NODE_ENV: '"development"',
		  LOCALE: '"en"'
	    }
	}),
  new ExtractTextPlugin({
    filename: 'css/[name].[contenthash].css'
  }),
	new HtmlWebpackPlugin({
	  template: 'index.html',
	  filename: 'index.html',
	  favicon: 'favicon.ico'
	})
  ]
}
