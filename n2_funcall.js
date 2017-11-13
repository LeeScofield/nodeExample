var http = require("http");
var otherfunction = require('./model/otherfunction');

http.createServer(function(request,response){
    response.writeHeader(200,{"Content-type":"text/html;charset=utf-8"});

    if(request.url !== '/favicon.ico'){
        console.log('enter');
        response.write("hello<br/>");
        fun1(response);
        otherfunction.fun2(response);
        otherfunction['fun3'](response);
        response.end('你好');
    }

}).listen(8000);

console.log('server start ...');

function fun1(response) {
    console.log('fun1');
    response.write('hello,i am fun1<br/>');
}

