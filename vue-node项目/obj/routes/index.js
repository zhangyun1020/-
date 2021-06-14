var express = require('express');
var router = express.Router();
// var bcrypt=require('../utils/bcrypt');
var jwt =require('../utils/jwt');
var mgdb=require('../utils/mgdb')
/* GET home page. */
router.get('/', function(req, res, next) {
  /* 找到views文件ejs末班 */
  // res.render('index', { title: 'Express' });
  //console.log(bcrypt.hashSync(req.body.password));//打印加密后的密码
//let a=bcrypt.hashSync(req.body.password) //从前端传过来数据进行加密
 //console.log(bcrypt.compareSync(req.body.password,a));//拿到前端的数据根数据库内的密码进行比对
 /* let token= jwt.sign({username:'alax',_id:'123884445585'});
 console.log(token); 测试token
 jwt.verify(token).then(res=>console.log(res)).catch(err=>console.log(err)) */

});

module.exports = router;
