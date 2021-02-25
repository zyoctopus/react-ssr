const path = require("path"); //node的path模块
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  target: "node",
  module: {
    rules: [
      {
        //打包规则
        test: /\.(js|jsx)$/, //对所有js文件进行打包
        exclude: /node_modules/, //不打包node_modules中的js文件
        use: {
          loader: "babel-loader", //使用babel-loader进行打包
        },
      },
      {
        test: /\.((c|le)ss)$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: { plugins: () => [postcssPresetEnv({ stage: 0 })] },
          },
          {
            loader: "less-loader",
          },
        ],
      },
    ],
  },
};
