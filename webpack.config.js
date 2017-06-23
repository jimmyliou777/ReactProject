// 這邊使用 HtmlWebpackPlugin，將 bundle 好的 <script> 插入到 body。${__dirname} 為 ES6 語法對應到 __dirname  
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/app/index.html`,
    filename: 'index.html',
    inject: 'body',
});

const path = require('path');
const webpack = require('webpack');
require('es6-promise').polyfill();
require('isomorphic-fetch');

//一些常用路徑
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    // 檔案起始點從 entry 進入，因為是陣列所以也可以是多個檔案
    entry: [
        './app/indexRedux.js',
    ],
    // output 是放入產生出來的結果的相關參數
    output: {
        path: `${__dirname}/dist`,
        filename: 'index_bundle.js',
    },
    module: {
        //代碼檢查
        // preLoaders: [{
        //   test: /\.js?$/,
        //   loaders: ['eslint'],
        //   include: APP_PATH
        // }],
        // loaders 則是放欲使用的 loaders，在這邊是使用 babel-loader 將所有 .js（這邊用到正則式）相關檔案（排除了 npm 安裝的套件位置 node_modules）轉譯成瀏覽器可以閱讀的 JavaScript。preset 則是使用的 babel 轉譯規則，這邊使用 react、es2015。若是已經單獨使用 .babelrc 作為 presets 設定的話，則可以省略 query
        loaders: [{
            test: /\.js|json$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test: /\.css$/,
            loaders: ['style', 'css'],
        }, {
            //url-loader 传入的 limit 参数是告诉它图片如果不大于 25KB 的话要自动在它从属的 css 文件中转成 BASE64 字符串
            test: /\.(png|jpg|svg|gif|woff|woff2|eot|ttf)$/,
            loader: 'url?limit=25000'
        }]
    },
    // devServer 則是 webpack-dev-server 設定
    devServer: {
        inline: true,
        historyApiFallback: true,
        port: 8008,
    },
    // plugins 放置所使用的外掛
    plugins: [HTMLWebpackPluginConfig],
};