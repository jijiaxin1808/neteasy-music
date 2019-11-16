const nodemailer = require('nodemailer');

let mailTransport = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 25,
  auth: {
      user: '1510185520@qq.com',
      // secureConnection: true, // use SSL
      // 注意这里是授权码
      pass: 'kpdlldhgtwopfgaa',
  }
});

module.exports = function(email, code) {
  let mailOptions = {   
    from: "1510185520@qq.com", //发信邮箱
    to: email, //接收者邮箱
    subject: "阿里邀你入职", //邮件主题
    text: "好好学习!天天向阿里",
    html: `您的邮箱验证码是 ${code}, Hi~ o(*￣▽￣*)ブ`,
 };
 mailTransport.sendMail(mailOptions, function(error, info) {   
     if (error) {        
         return console.log(error);    
     }   
     console.log('Message sent: ' + info.response);
 });
}
