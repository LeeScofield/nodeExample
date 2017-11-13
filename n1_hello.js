var http = require("http");

http.createServer(function(request,response){
	response.writeHeader(200,{"Content-type":"text/html;charset=utf-8"});

	if(request.url !== '/favicon.ico'){
		console.log('enter');
		response.write("hello");
		response.end('你好');
	}

}).listen(8000);

console.log('server start ...');


