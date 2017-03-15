var http = require('http');
var server = http.createServer(function(req,res){
	 if(req.url!=="/favicon.ico"){
	 	req.on('data',function(data){
	 		console.log("服务器接受数据: "+ decodeURIComponent(data));
	 	});
	 	req.on("end",function(){
	 		console.log("数据全部已接收!");
	 	});
	 }
	 res.end();
}).listen(30000,"localhost",function(){
	console.log("listened");
});

