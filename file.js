const fs=require('fs');
fs.readFile('1.js',function(err,data){
    console.log('err:'+err);
    console.log('data',data.toString());
});

fs.writeFile('testFileWrite.txt','testWrite123',function(err){
    console.log('writeErr'+err);
    
});