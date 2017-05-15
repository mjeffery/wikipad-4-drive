const path = require('path')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /.jsx?$/,
			loader: 'babel-loader',
			options: {
				babelrc: false,
				presets: [
					['env', {
						targets: {
							browsers: ['last 2 versions']
						},
						useBuiltIns: true,
						modules: false
					}],
					'react'
				]
			}
		}]
	},
	devtool: 'cheap-eval-source-map',
	devServer: {
		port: 8080,
		contentBase: path.join(__dirname, 'public'),
		watchContentBase: true
	},
	watch: true
}
