var path = require('path');
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
                loaders: ['style-loader', 'css-loader'],
                include: path.resolve(__dirname, './src'),

            }
        ],
    },
    target: 'node',
};