var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write("<h1>Página principal!</h1>");
    
    var txt = fs.createWriteStream('./arquivos/clubes_escrito.txt', {flags: 'a'});
    txt.write(request.url + '\n');
    response.end();
});

server.listen(3000, function(){
    console.log("Rodando...")
});