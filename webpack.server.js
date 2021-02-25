const path = require("path"); //node的path模块
const webpackMerge = require('webpack-merge').default;
const nodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.base.js");

const serverConfig = {
  mode: "development", //开发模式
  entry: "./server.js", //入口
  output: {
    //打包出口
    filename: "bundle.js", //打包后的文件名
    path: path.resolve(__dirname, "build"), //存放到根目录的build文件夹
  },
  externals: [nodeExternals()], //保持node中require的引用方式
};

module.exports = webpackMerge(baseConfig, serverConfig);
