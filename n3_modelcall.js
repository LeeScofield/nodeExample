var http = require('http');
// var Person = require('./model/Person');
var Student = require('./model/Student');

http.createServer(function (request, response) {
    if(request.url !== '/favicon.ico'){
        response.writeHeader(200,{'Content-type':'text/html;charset=utf-8'});

        // var p = new Person("张三",12);
        // p.doSomething(response);

        var s = new Student.Student("李四",33);
        s.doSomething(response);
        s.sayHello(response);

        response.end('----');
    }
}).listen(8000);


console.log('server start ...' + new Date());