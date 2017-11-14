var http = require('http');
var url = require('url');
var login = require('./model/login');

http.createServer(function (request, response) {
    if(request.url !== '/favicon.ico'){
        response.writeHeader(200,{'Content-type':'text/html;charset=utf-8'});

        response.write(html);
        var pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/^\//,'');

        login[pathname](response);

        response.write(pathname);
        response.end('----');
    }
}).listen(8000);

console.log('server start ...' + new Date());