var webpack = require('webpack');
module.exports = {
    context: __dirname + "/app",
    entry: [
        "./index.jsx", 
        'webpack/hot/only-dev-server',
        'webpack-dev-server/client?http://localhost:8080'
    ],
    output: {
        filename: "app.js",
        path: __dirname + "/dist"
    },
    devtool: 'source-map',
    resolve: {
        extensions:['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "react-hot!babel"
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true
   },
   plugins: [
       new webpack.HotModuleReplacementPlugin()
   ]
};
