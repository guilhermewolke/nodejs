var http = require('http'),
    arquivo = require("fs");

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/html"});
    
    if (request.url == '/') {
        arquivo.readFile(__dirname + '/arquivos/index.html', function(err, data){
            if (err) response.write("arquivo não encontrado");
            response.write(data);
            response.end();
        }); 
    } else if (request.url == '/contato') {
        arquivo.readFile(__dirname + '/arquivos/contato.html', function(err, data){
            if (err) response.write("arquivo não encontrado");
            response.write(data);
            response.end();
        });
    } else {
        response.write("página não encontrada");
    }
});

server.listen(3000, function(){
    console.log("Servidor rodando");
    console.log("Dirname: " + __dirname);
})