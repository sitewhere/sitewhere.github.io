var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

// Routes to render.
var routes = [ '/', '/contact' ]

// Webpack rules.
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

// Create a configuration per locale.
module.exports = (env) => ({
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../' + env.locale),
    publicPath: 'https://sitewhere.io/en',
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
  plugins: [
	  new webpack.DefinePlugin({
	    'process.env': {
	      NODE_ENV: '"production"',
	      LOCALE: JSON.stringify(env.locale)
	    }
	  }),
	  new HtmlWebpackPlugin({
	    template: 'index.html',
	    filename: path.resolve(__dirname, '../' + env.locale + '/vue.html'),
	    favicon: 'favicon.ico'
	  }),
	  new PrerenderSPAPlugin({
	    staticDir: path.join(__dirname, '../' + env.locale),
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
  		  headless: false,
  		  renderAfterDocumentEvent: 'render-event'
    	})
	  })
	]
})
