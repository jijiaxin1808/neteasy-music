const express = require("express");
const utils = require("utility");
// 解析cookie和post的两个中间件
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRouter = require("./userServer");
const cors = require('cors');
// 新建app
const app = express();
// 数据中间件
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
// user为路由前缀, 只要和/user相关的, 它的子路由由userRouter定义
app.use("/user", userRouter);

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE");
  next();
});

app.listen(9093, () => {
  console.log("Node app start at port 9093")
});
