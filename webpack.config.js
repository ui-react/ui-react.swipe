const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry   : `./src/bootstrap`,
    output  : {
        path    : path.resolve(__dirname, 'build'),
        filename: `main-${process.env.npm_package_version}.js`
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            loader: 'babel',
            query: {
                presets: [
                    'es2015',
                    'react'
                ],
                plugins: [
                    'transform-class-properties'
                ]
            }
        }, {
            test: /\.pcss$/,
            loader: ExtractTextPlugin.extract(`css!postcss`)
        }, {
            test: /\.json$/,
            loader: 'json'
        }]
    },
    plugins: [
        new ExtractTextPlugin(`main-${process.env.npm_package_version}.css`)
    ],
    postcss: () => {
        return [
            require('postcss-nested')
        ];
    },
    resolve : {
        modulesDirectories : [
            'node_modules'
        ],
        extensions : [
            '',
            '.js',
            '.json',
            '.pcss'
        ],
        alias : {
            component   : path.resolve(__dirname, 'src', 'components'),
            page        : path.resolve(__dirname, 'src', 'pages'),
            i18n        : path.resolve(__dirname, 'src', 'i18n')
        }
    },
    resolveLoader : {
        modulesDirectories : [
            'node_modules'
        ]
    }
};