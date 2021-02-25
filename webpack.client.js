const path = require("path"); //node的path模块
const webpackMerge = require("webpack-merge").default;
const baseConfig = require("./webpack.base.js");

const clientConfig = {
  mode: "development", //开发模式
  entry: "./src/app.js", //入口
  output: {
    //打包出口
    filename: "bundle.js", //打包后的文件名
    path: path.resolve(__dirname, "public"), //存放到根目录的build文件夹
  },
};

module.exports = webpackMerge(baseConfig, clientConfig);
