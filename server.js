var http = require ('http');
var fs = require('fs');
var colors = require ('colors');
//Estableciendo tema de colores 
colors.setTheme({
    'data' : 'cyan',
    'info' : 'rainbow',
    'error' : 'red'
});

var server = http.createServer(function(req, res){
    fs.readFile('./static/index.html','utf8',function(err, content){
        if(err){
            //Hubo error
            res.writeHead(500,{
                'Content-Type' : 'text/html'
            });
            console.log('Error en la lectura de'. error+'un archivo: ln20 server.js'.error);
            res.end('<H1>Error interno</H1>');
        }else{
            //No hubo error 
            res.writeHead(200,{
                'Content-Type' : 'text/html'
            });
            console.log('Sirviendo html'.data);
            res.end(content);

        }
    });
});

server.listen(3000,'127.0.0.1',function(){
        console.log('> Server corriendo en http://127.0.0.1:3000 ...');
    });