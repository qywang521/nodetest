const http=require('http');
const urlLib=require('url');
var server=http.createServer(
    
	function(req,res){
    
        var i=0;
        var str='';
	 req.on('data',function(data){
       console.log('第${i++}次接收到数据');
      //console.log('第1111次接收到数据');
        str+=data;
        
     });

     req.on('end',function(){
        console.log('excute end');
     });

	}
)
server.listen(8009);
