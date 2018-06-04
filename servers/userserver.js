const http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const urllib=require("url");

var users={}; //'wzh':'wang123'

//filepattern
//http://localhost:8080/user/action=reg&user=wzh&pwd=wang123

var server=http.createServer(function(req,res){
    var str='';

    req.on('data',function(data){
        str+=data;
    });
    req.on('end',function(){
        var obj=urllib.parse(req.url,true);

        const url=obj.pathname;
        const get=obj.query;
        const post=querystring.parse(str);

        console.log(obj);
        console.log('url:'+url);
       // console.log('get:'+get);
       // console.log('post:'+post);

        //接口
        if(url=='/user'){
            switch(get.action){
                case 'reg':
                    if(get.user){
                        req.write('{"ok":false,"msg":"用户已存在"}');
                    }else{
                        users[get.user]=get.pwd;
                        req.write('{"ok":true,"msg":"注册成功"}');
                    }
                    break;
                case 'login':
                    if(users[get.user==null]){
                        req.write('{"ok":false,"msg":"用户不存在"}');
                    }else if(users[get.user]!=get.pwd){
                        req.write('{"ok":false,"msg":"用户名或密码错误"}');
                    }else{
                        req.write('{"ok":true,"msg":"登陆成功"}');
                    }

                    break;
                default:
                    res.write('{"ok":false,"msg":"not found action"}');
            }

        //文件
        }else{
            console.log('进入文件读取中');
            var file_name='./resources'+url;
           
            console.log('file_name:'+file_name);
            fs.readFile(file_name,function(err,data){
                if(err){
                    res.write('404 not found');
                }else{
                    console.log(3);
                    res.write(data);
                }
            });
           
        }

    });
});

server.listen(8080);

