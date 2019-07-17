const nodeExternals = require('webpack-node-externals')
module.exports = {
    // Tell webpack to run babel on
    // every file it runs through on client and server.
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env',
                            {
                                targets: {
                                    browsers: ['last 2 versions']
                                }
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: 'url-loader?limit=8192'
            }
        ]
    }
};