const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isDevBuild = process.env.NODE_ENV === "development";
const extractCSS = new ExtractTextPlugin('vendor.css');

module.exports = {
    mode: isDevBuild ? "development" : "production",
    entry: {
        vendor: [
            "react",
            "react-dom",
            "react-hot-loader",
            "office-ui-fabric-react"
        ]
    },
    output: {
        path: path.join(__dirname, "./app/public/js"),
        filename: "[name].js",
        library: "[name]_[hash]"
    },
    stats: {
        modules: false
    },
    module: {
        rules: [
            { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' },
            { test: /\.css(\?|$)/, use: extractCSS.extract([isDevBuild ? 'css-loader' : 'css-loader?minimize']) }
        ]
    },
    plugins: [
        extractCSS,
        new webpack.DllPlugin({
            path: path.join(__dirname, './app/public/js', '[name]-manifest.json'),
            name: '[name]_[hash]'
        })
    ]
}