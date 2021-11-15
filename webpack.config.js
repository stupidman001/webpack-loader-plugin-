const { resolve } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'build.js',
        path: resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jp?g|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: "img/[name].[hash:4][ext]"
                }
            },
            {
                test: /\.(ttf|woff|woff2)$/i,
                generator: {
                    filename: "icon/[name].[hash:4][ext]"
                }
            },
            {
                test: /\.m?js$/,
                use:{
                    loader:"babel-loader"         
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "线上环境",
            template: './src/public/index.html'
        }),
        new DefinePlugin({
            BASE_URL: '"./"'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: __dirname + '/src/public',
                    globOptions: {
                        ignore: [ // 配置不用copy的文件
                            '**/index.html',
                        ]
                    },
                    to:'./'
                }
            ]
        })
    ],
    mode: 'development'
}