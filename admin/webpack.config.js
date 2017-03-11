
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');



const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/public/index.html`,
    filename: 'index.html',
    inject: true
});

console.log(`${__dirname}/public/index.html`)
module.exports = {
    entry: [
        
        `${__dirname}/src/index.js`
    ],
    output:{
        path: `${__dirname}/dist`,
        publicPath: 'http://localhost:3001/public/',
        filename: '[name].[hash].js'
    },
    module: {
        loaders: [
            {
                test:/\.jsx?$/,
                loaders: ["react-hot-loader","babel-loader"],
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                loaders: ['style-loader','css-loader']
            },
            {
                test:/\.scss$/,
                loaders: ['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.BannerPlugin("This file is created by Luo Xia")
    ]
}