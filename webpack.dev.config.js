const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '',
		clean: true // will clean dist folder before every build
	},
	mode: 'development',
	plugins: [
		new ESLintPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './public/index.html',
			scriptLoading: 'defer'
		})
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist')
		},
		hot: true,
		port: 3000,
		devMiddleware: {
			index: true
		}
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							['@babel/preset-react', { runtime: 'automatic' }]
						]
					}
				}
			},
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 0,
							esModule: true,
							modules: {
								namedExport: true
							}
						}
					}
				]
			}
		]
	}
};
