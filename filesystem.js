var fs = require('fs');

fs.readFile('./arquivos/clubes.txt', function(err, data){
    if (err) throw err;

    console.log(data.toString());
});

fs.writeFile('./arquivos/clubes_escrito.txt', "Arquivo escrito 2", [{flags: 'w+'}], function(err){
    if (err) throw err;

    console.log('Arquivo escrito');
});