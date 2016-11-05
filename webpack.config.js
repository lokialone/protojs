const path = require('path')
module.exports = {
  entry: path.join(__dirname,'/src/index'),
  output: {
    path.join(__dirname,'/dist'),
    filename: 'bundle.js'
  }
  resolve: {
    extensions: ['','.js']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  devServer: {
			historyApiFallback: true,
			hot: true,
			inline: true,
			stats: 'errors-only',
			host: '127.0.0.1',
			port: 9000
		}

}
