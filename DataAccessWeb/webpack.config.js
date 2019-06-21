const path = require("path");
const outputDir = "./app/public/js";
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevBuild = process.env.NODE_ENV === "development";

module.exports = {
    mode: isDevBuild ? "development" : "production",
    devtool: "source-map",
    entry: {
        main: "./app/src/index.js"
    },
    output: {
        path: path.join(__dirname, outputDir),
        filename: "[name].js",
        publicPath: "http://localhost:8080/js",   //for HMR: HOT ? ReplaceMent
    },

    resolve: {
        extensions: [".web.js", ".js", ".jsx", ".json"]
    },

    module: {
        rules: [
            {
                test: /(\.js$)|(\.jsx$)/,
                include: [
                    path.resolve(__dirname, "./app/src")
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: "babel-loader"  //es6->es5
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: "file-loader"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: "url-loader?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./app/public/js/vendor-manifest.json')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],

    devServer: {
        contentBase: "./app/public",
        headers: {
            'Access-Control-Allow-Origin': '*' //配合服务端开发,需要跨域
        },
        hot: true,
        port: 8080
    }
}