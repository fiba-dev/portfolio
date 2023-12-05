const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dev = process.env.NODE_ENV === "development";

module.exports = {
	mode: dev ? "development" : "production",
	entry: "./src/index.tsx",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: [
					"style-loader",
					{ loader: "css-loader", options: { modules: true } },
				],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".js", ".ts"],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		port: 8080,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/index.html",
			filename: "index.html",
		}),
	],
};
