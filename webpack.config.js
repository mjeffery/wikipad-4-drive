const path = require('path')
const StringReplacePlugin = require('string-replace-webpack-plugin')

const secrets = require('./secrets')

module.exports = {
	entry: {
		main: './src/index.js',
		install: './src/install.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /.jsx?$/,
			use:[{
				loader: StringReplacePlugin.replace({
					replacements: [{
						pattern: /%(\w*?)%/ig,
						replacement: (match, p1, offset, string) => secrets[p1]
					}]
				})
			}, {
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
		}]
	},
	plugins: [ new StringReplacePlugin() ],
	devtool: 'cheap-eval-source-map',
	devServer: {
		port: 8080,
		contentBase: path.join(__dirname, 'public'),
		watchContentBase: true
	},
	watch: true
}
