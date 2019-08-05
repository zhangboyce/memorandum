'use strict';
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: './app/index.js',
        404: './app/404.js',
        console: './app/console.js',
    },
    output: {
        publicPath: "http://localhost:8080/dist",
        path: path.resolve(__dirname, 'public/dist'),
        filename: '[name].min.js'
    },
    devServer: {
        contentBase: './app',
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.less|\.css/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.svg|\.ttf|\.otf/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CopyPlugin([
            {
                context: path.resolve(__dirname, 'app/'),
                from: path.resolve(__dirname, 'app/console/**/*'),
                to: path.resolve(__dirname, 'app/dist'),
            },
            {
                context: path.resolve(__dirname, 'app/'),
                from: path.resolve(__dirname, 'app/*.html'),
                to: path.resolve(__dirname, 'app/dist'),
            },
        ]),
    ]
};