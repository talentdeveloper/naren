// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: [
        'babel-polyfill'
    ],
    resolve: {
        alias: {
            webworkify: 'webworkify-webpack-dropin',
           'videojs-contrib-hls': path.join(__dirname, '../node_modules/videojs-contrib-hls/dist/videojs-contrib-hls.js'),
            '@videojs/http-streaming': path.join(__dirname, '../node_modules/@videojs/http-streaming/dist/videojs-http-streaming.js')
        }
    },
  plugins: [
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('dev'),
          'process.env.PLATFORM_ENV': JSON.stringify('web'),
          'typeof global': JSON.stringify('undefined'), //required for videojs-contrib-hls support
      }),
      new webpack.ProvidePlugin({
          videojs: "video.js",
          "window.videojs": "video.js"
      }),
      new Dotenv()
  ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['babel-preset-es2015', 'babel-preset-react'],
                        plugins: ['transform-class-properties']
                    }
                },
            },
            {
                test: /\.(jpg|png|svg|mp4|eot)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
};
