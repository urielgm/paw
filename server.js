var http = require ('http');
var fs = require('fs');
var mime = require ('mime');
var colors = require ('colors');
var staticServer = require ("./internals/static-server")
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
    staticServer.serve(url, res);
});

server.listen(PORT,IP,function(){
        console.log(`> Server corriendo en http://${IP}:${PORT} ...`.data);
    });