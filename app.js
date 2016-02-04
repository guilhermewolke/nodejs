var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write("<h1>Hello World!</h1>");
    response.write("<br />");
    response.write("<br />");
    response.write("<br />");
    response.write("<h3>Hello World!</h3>");
    response.end();
});

server.listen(3000, function(){
    console.log("Rodando...")
});