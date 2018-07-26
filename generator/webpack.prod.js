const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

// Routes to render.
var routes = [ '/', '/contact' ]

// Create a configuration per locale.
module.exports = (env) => ({
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../' + env.locale),
    publicPath: '/' + env.locale,
    filename: 'build.js'
  },
  module: {
    rules: [
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
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[ext]',
          publicPath: '/' + env.locale
        }
      }
    ]
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
  plugins: [
	  new webpack.DefinePlugin({
	    'process.env': {
	      NODE_ENV: '"production"',
	      LOCALE: JSON.stringify(env.locale)
	    }
	  }),
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new OptimizeCSSPlugin ({
      cssProcessorOptions: {
        safe: true
      }
    }),
	  new HtmlWebpackPlugin({
	    template: 'index.html',
	    filename: path.resolve(__dirname, '../' + env.locale + '/vue.html'),
	    favicon: 'favicon.ico'
	  }),
	  new PrerenderSPAPlugin({
	    staticDir: path.join(__dirname, '../'),
	    indexPath: path.join(__dirname, '../' + env.locale, 'vue.html'),
	    outputDir: path.join(__dirname, '../' + env.locale),
	    routes: routes,
	    postProcess (renderedRoute) {
	      if ('/' === renderedRoute.originalRoute) {
		      renderedRoute.outputPath = path.join(__dirname, '../' + env.locale, 'index.html')
	      } else {
		      renderedRoute.outputPath = path.join(__dirname, '../' + env.locale, renderedRoute.originalRoute + '.html')
	      }
	      return renderedRoute
	    },
	    renderer: new Renderer({
  		  headless: true,
  		  renderAfterDocumentEvent: 'render-event'
    	})
	  })
	]
})
