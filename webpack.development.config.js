var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var flexibility = require('postcss-flexibility');

module.exports = {
    entry:
    {
        app: [
            'webpack-hot-middleware/client',
            'babel-polyfill',
            './public/src/containers/app'
        ]
    },
    output:
    {
        path: '/asset/js/bundle/',
        filename: 'bundle.js',
        publicPath: '/asset/js/bundle/',
        chunkFilename: "chunk.[name].js"
    },
    devtool: 'source-map',
    resolve:
    {
        "extensions": ["", ".js", ".jsx"]
    },
    module:
    {
        loaders: [
        {
            test: /\.js?$/,
            loader: 'babel',
            include: path.resolve(__dirname, 'public'),
            exclude: /node_modules/
        },
        {
            test: /\.json$/,
            loader: "json-loader"
        },
        {
            test: /\.css|\.scss$/,
            loaders: [
                "style",
                "css",
                "sass?outputStyle=compressed",
                "postcss"
            ]
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url-loader?limit=8192&name=./asset/img/[name].[ext]'
        }]
    },
    postcss: [
        autoprefixer,
        flexibility
    ],
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' })
    ]
};
