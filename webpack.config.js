var webpack = require('webpack');
var minimize = process.argv.indexOf('--minimize') !== -1;
module.exports = {
    entry: './src/index.ts',
    output: {
        libraryTarget: "var",
        library: "mcapi",
        filename: minimize ? 'lib/mcapi.min.js' : 'lib/mcapi.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    plugins: minimize ? [
        new webpack.optimize.UglifyJsPlugin()
    ] : [],
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
}