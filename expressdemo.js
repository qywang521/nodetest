//express_demo.js 文件
var express = require('express');
var app = express();
const testjson={'a':1,'b':2};

//app.get('/', function (req, res) {
//    res.send('Hello World');
 //})
 
 // get 过滤的请求 '/'  '/user' '/produce'
 app.get('/',(req,res)=>{
     res.send('hello world');
    // res.json(testjson);
});
  
 var server = app.listen(8081, ()=> {
  
   var host = server.address().address
   var port = server.address().port
  
   console.log("应用实例，访问地址为 http://%s:%s--%s", host, port,'测试占位符')
  
 })