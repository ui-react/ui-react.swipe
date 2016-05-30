'use strict';

const path = require('path');

module.exports = {
    entry : './src',
    output: {
        path    : path.resolve(__dirname, 'build'),
        filename: 'carusel.js',
        pathinfo: true
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            loader: 'babel',
            query: {
                presets : [
                    'es2015',
                    'react'
                ],
                plugins : [
                    'transform-class-properties'
                ]
            }
        }/*, {
            test: /\.pcss$/,
            loader: 'style!css!postcss'
        }*/]
    },
/*
    postcss: () => {
        return [
            require('postcss-nested')
        ];
    },
*/
    resolve : {
        modulesDirectories : [
            'node_modules'
        ],
        extensions : [
            '',
            '.js',
            '.pcss'
        ]
    },
    resolveLoader : {
        modulesDirectories : [
            'node_modules'
        ]
    },
    devtool : 'source-map'
};