const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // 入口文件
  entry: './src/main.js',

  // 输出文件
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  // 模式
  mode: 'development',

  // 模块
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

    // 插件
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html', // 指定 HTML 模板文件
        filename: 'index.html',        // 输出的 HTML 文件名
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'public'),
            to: path.resolve(__dirname, 'dist'),
            noErrorOnMissing: true, // 如果 public 目录不存在，不报错
          },
        ],
      }),
    ],

  // 开发服务器配置
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // 提供静态文件的目录
    },
    compress: true,
    port: 9000,
  },
};
