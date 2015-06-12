module.exports = {

    entry: {
        '01': './01-modules/index.js'
    },

    output: {
        filename: 'bundle.[name].js',
        path: './dist/',
        publicPath: '/dist/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [
                    /node_modules/,
                    /dist/
                ]
            }
        ]
    },

    devServer: {
        inline: true
    }

};
