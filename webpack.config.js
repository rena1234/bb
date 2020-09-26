const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{	
				test: /\.module\.scss$/,
				loader: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					},
					{
						loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['src']
              }
            }
					}
				]
			}
    ]
  },
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		})
	],
	resolve:{
		alias: {
			Components: path.resolve(__dirname, 'src/components'),
			Contexts: path.resolve(__dirname, 'src/context'),
			Hooks: path.resolve(__dirname, 'src/hooks')
		}
	},
};
