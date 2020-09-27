const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
	],
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
                includePaths: ['src', 'assets']
              }
            }
					},
				]
			},
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ],
      },
    ]
  },
	resolve:{
		alias: {
			Components: path.resolve(__dirname, 'src/components'),
			Contexts: path.resolve(__dirname, 'src/context'),
			Hooks: path.resolve(__dirname, 'src/hooks')
		}
	},
};
