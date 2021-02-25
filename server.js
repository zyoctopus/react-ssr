require("@babel/register");
const express = require("express");
// const path = require("path");

const React = require("react");
const { renderToString } = require("react-dom/server");
const temp = require("./template").default;
const App = require("./src/page/index").default;

const app = express();
const port = 5020;
const isServerRender = true;

// 设置静态文件目录
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

// 服务端渲染
app.get("/", (req, res) => {
  if (isServerRender) {
    const appString = renderToString(<App />);
    const html = temp({ body: appString, title: "test" });
    res.send(html);
  } else {
    const html = temp({ title: "test" });
    res.send(html);
  }
});

// 启动express服务，监听端口
app.listen(port, () => console.log(`服务启动成功，http://localhost:${port}`));
