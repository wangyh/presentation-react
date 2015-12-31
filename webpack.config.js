module.exports = {
    context: __dirname + "/app",
    entry: {
        javascript: "./app.js",
        html: "./index.html"
    },
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
    }
};
