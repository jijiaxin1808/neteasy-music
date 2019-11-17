const mongoose = require("mongoose");
// 链接mongo 并且使用users这个集合
const DB_URL = "mongodb://localhost:27017/cnasm";
mongoose.connect(DB_URL);

const models = {
  user: {
    "user": { type: String, require: true },
    "password": { type: String, require: true },
    "avatarUrl": String,
    "desc": String,
    "createDate": Number,
    // isLive表示用户的验证状态, isLive表示注册成功
    "isLive": Boolean,
    "verifyCode": "",
  }
}

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
  getModel: name => {
    return mongoose.model(name);
  }
}