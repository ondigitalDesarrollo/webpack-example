var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build/')
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, '/src'),
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),

            }
        ],
    },
    target: 'node',
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ],
};