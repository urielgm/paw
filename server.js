var http = require ('http');
var fs = require('fs');
var mime = require ('mime');
var colors = require ('colors');
//Importando el objetoc onfigurador
var config = require('./config/config'); 
//Estableciendo tema de colores 
colors.setTheme(config.colorTheme);
//Importando configuraciones 
var IP = config.IP,
    PORT = config.PORT;

var server = http.createServer(function(req, res){
    var url = req.url;
    if(url  === "/")
    {
        url = '/index.html'
    }
    //Generar la ruta real 
    //del archivo solicitado
    console.log(`> Recurso solicitado> ${url}`.data);
    var filePath = './static' + url;
    console.log(`>Se servira Archivo: ${filePath}`.data);
//Seleccionar el tipo MIME 
var mimeType = mime.lookup(filePath);

    fs.readFile(filePath,function(err, content){
        if(err){
            //Hubo error
            res.writeHead(500,{
                'Content-Type' : 'text/html'
            });
            console.log('Error en la lectura de'. error+' un archivo: ln20 server.js'.error);
            res.end('<H1>Error interno</H1>');
        }else{
            //No hubo error 
            res.writeHead(200,{
                'Content-Type' : mimeType
            });
            console.log(`Sirviendo ${filePath}`.data);
            res.end(content);

        }
    });
});

server.listen(PORT,IP,function(){
        console.log(`> Server corriendo en http://${IP}:${PORT} ...`.data);
    });