const urlLib=require('url');
var path='http://123.2.3.12:8001/index?a=1&b=2';
var obj= urlLib.parse(path,true);
console.log(obj.query);