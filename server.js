const http=require('http');
var server=http.createServer(
	function(req,res){
		console.log('test node from vscode');
		res.write('vs node agin with git12');
		res.end();
	}
)
server.listen(8009);
