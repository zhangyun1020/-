var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer=require('multer');
var objMulter=multer({dest:'./public/upload/user/'});
var cors=require('cors')


var usersRouter = require('./routes/users');
/* 创建web服务器 */
var app = express();

// view engine setup
app.use(objMulter.any())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ 
  //允许所有前端域名
  "origin": ["http://localhost:8001","http://localhost:5000","http://127.0.0.1:8848"],  
  "credentials":true,//允许携带凭证
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
  "allowedHeaders":['Content-Type','Authorization','token']//被允许的post方式的请求头
}));
/* 资源托管 */
app.use(express.static(path.join(__dirname, 'public','template')));
app.use('/supervisor',express.static(path.join(__dirname, 'public','admin')));
app.use(express.static(path.join(__dirname, 'public')));
/* 响应--客户端 */
app.all('/api/*',require('./utils/params'));
app.use('/api/news',require('./routes/api/news'))
app.use('/api/reg',require('./routes/api/reg'))
app.use('/api/login',require('./routes/api/login'))
app.use('/api/user',require('./routes/api/user'))
app.use('/api/logout',require('./routes/api/logout'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
