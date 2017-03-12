module.exports = function(config) {
	'use strict';
  	config.set({
    	basePath: '',
    	frameworks: ['mocha', 'chai'],
    	files: [
    		'tests.webpack.js'
    	],
    	preprocessors: {
	        'tests.webpack.js': ['webpack']
    	},
    	webpack: { //kind of a copy of your webpack config
	      devtool: 'inline-source-map', //just do inline source maps instead of the default
	      	module: {
	        loaders: [
	          {
	            test: /\.js$|\.jsx$/,
	            loader: 'babel-loader',
	            exclude: /node_modules/,
	            query: {
	              presets: ["react","env","airbnb"]
	            }
	          }
	        ]
	      	},
	      externals: {
	      	'cheerio': 'window',
	  		'react/addons': 'react',
	        'react/lib/ExecutionEnvironment': true,
	        'react/lib/ReactContext': true
	      }
    },
  	});
};