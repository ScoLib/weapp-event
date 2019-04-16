const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    target: "node",
    entry: [path.resolve(__dirname, "src", "index.js")],
    output: {
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "commonjs",
        filename: "index.js"
    },
    module: {
        rules: [
            { test: /\.js$/, use: "babel-loader" }
        ]
    },
    plugins: [
        new TerserPlugin({
            terserOptions: {
                compress: {
                    drop_console: true,
                },
            }
        })
    ]
}