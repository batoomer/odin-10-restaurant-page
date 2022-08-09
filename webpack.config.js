const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        static: './dist',
    },


    entry: path.resolve(__dirname, 'src/index.js'),

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant',
            template: path.resolve(__dirname, 'src/templates/index.html'),
        }),

        new MiniCssExtractPlugin(),
    ],

    module: {
        rules: [
            // CSS
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            //Images
            {
                test: /\.(png|svg|jpg)$/i,
                type: 'asset/resource',
            }
        ],
    },
}