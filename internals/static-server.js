var mime = require("mime"), 
fs = require("fs");

//Exportando la funcionalidad del servidor 
//estatico 
exports.serve = function(url, res){
    
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
};