const express = require("express");
const fs = require('fs');
const utils = require("utility");
const sendMail = require('./middleware/sendMail.js')
const Router = express.Router();
// 注意这里的坑, key以后尽量都用字符串形式
const _filter = { "password": 0, "__v": 0 };
const model= require("./model");
const User = model.getModel("user");
// 用于调试用户列表的页面
Router.get("/list", (req, res) => {
  User.find({}, (err, doc) => {
    return res.json(doc);
  });
});
// 登录
Router.post("/login", (req, res) => {
  const { user, password } = req.body;
  // 设置第二个参数为显示参数
  User.findOne({user, password: md5Psw(password)}, _filter, (err, doc) => {
    if(!doc) {
      res.json({code: 1, msg: "用户名不存在或密码错误"});
    }
    // 登录应该要有个cookie吧, 如果手动删除cookie了的话, 就会登录失效, 然后就登不上去
    // 一定要在if(doc)下, 不然服务器端会报错
    if(doc){
      res.cookie("userid", doc._id);
      return res.json({code: 0, data: doc});
    }
  })
})
// 注册
Router.post("/register", (req, res) => {
  const {user, password} = req.body;
  
  User.findOne({user}, (err, doc) => {
    if(doc) {
      return res.json({code: 1, msg: "用户名重复"});
    }
    // 这样才能拿到用户id
    const userModel = new User({user, password: md5Psw(password)});
    userModel.save((err, doc) => {
      if(err) {
        return res.json({code: 1, msg: "后端出错了"});
      }
      const { user, _id } = doc;
      res.cookie("userid", _id);
      return res.json({code: 0, data: {user, _id}});
    });
    // User.create({user, password: md5Psw(password)}, (err, doc) => {
    //   if(err) {
    //     return res.json({code: 1, msg: "后端出错"});
    //   } 
    //   res.cookie("userid", doc._id);
    //   return res.json({code: 0});
    // });
  })
});
// 
Router.get("/info", (req, res) => {
  const { userid } = req.cookies;
  // 用户没有cookie
  if(!userid) {
    return res.json({code: 1});
  }
  User.findOne({_id: userid}, _filter, (err, doc) => {
    if(err) {
      return res.json({code: 1, msg: "后端出错了"});
    }
    if(doc) {
      return res.json({code: 0, data: doc});
    }
  });
});
// 发送验证码
Router.get("/email", (req, res) => {
  const email = req.query.email || '';
  const user = req.query.user || '';
  const verifyCode = createSixNum();
  const createDate = +new Date();
  const isLive = "no";

  User.findOne({user}, (err, doc) => {

    if (doc) {
      return res.json({code:1,msg:"账号已经存在"});
    } else {
      if (email && user) {
        res.json({code:0,message:"账号可注册"});
        User.create({user,email,verifyCode,createDate,isLive}, (err, doc) => {
          if (err) {
            return res.json({code:1,msg:"后端出错了"});
          }
          sendMail(email, verifyCode);
        });
      } else {
        res.json({code:3,msg:"用户名不能为空"});
      }
    }
  })
});
// 验证验证码
Router.get("/captcha/verify", (req, res) => {

  const user = req.query.user;
  const yourCode = req.query.verifyCode;
  console.log(user)
  User.findOne({user}, (err, doc) => {

    if (doc) {
      const { verifyCode, createDate } = doc;
      let nowDate = +new Date();
      if((yourCode === verifyCode) && (nowDate - createDate) < 600000) {
        let updates = {
          $set: {
            createDate: nowDate,
            isLive: true,
            verifyCode: "",
          },
        };
        User.findOneAndUpdate({user}, updates, (err) => {
          if (err) console.log("后端出错了");
        });

        res.json({code:0,msg:"注册成功"})
      } else {
        // 这个命令删除用户
        User.deleteOne({user, isLive: false}, (err) => {
          if (err) console.log(err);
        })
        res.json({code:1,msg:"验证码错误或已到期"});
      }
    } else {
      res.json({code:1,msg:"用户不存在"});
    }
  });
}); 
// 考虑到用户密码过于简单的情况下, 很容易被暴力破解, 
// 所以一般还要自己再处理一下密码再md5, 所谓的加"盐"
function md5Psw(psw) {
  const salt = "zsy_like_you-12312@qqDFGCS%~sfa";
  return utils.md5(psw+utils.md5(salt));
}

function createSixNum() {
  var Num="";
  for(let i = 0; i < 6; i++) {
      Num+=Math.floor(Math.random()*10);
  }
  return Num;
}

module.exports = Router;