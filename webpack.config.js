module.exports = {
	entry: __dirname + '/src/app.js',
		output: {
    		path: __dirname + '/dist',
    		filename: 'bundle.js'
  		},
  	resolve: {
    	extensions: ['.js', '.jsx']
  	},
  	module: {
    	loaders: [
      	{
        	test: /\.jsx?$/,
        	loader: 'babel-loader',
        	exclude: /node_modules/,
      	}
    	]
  	}
}