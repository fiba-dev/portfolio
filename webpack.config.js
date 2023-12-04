const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
	const isDev = argv.mode === "development";

	return {
		entry: "./src/index.tsx",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "bundle.js",
		},
		devServer: {
			contentBase: path.join(__dirname, "dist"),
			port: 3000,
			hot: true,
		},
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
						{
							loader: "css-loader",
							options: {
								modules: true,
							},
						},
					],
				},
			],
		},
		resolve: {
			extensions: [".tsx", ".js", ".ts"],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: "index.html",
				inject: "body",
			}),
		],
	};
};
