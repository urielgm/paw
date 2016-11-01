var http = require ('http');
//var color = require ('colors');
//Estableciendo tema de colores 
/*colors.setTheme({
    'data' : 'cyan',
    'info' : 'rainbow',
    'error' : 'red'
});
*/

var server = http.createServer(function(req, res){
    res.writeHead(200,{
        'Content-Type':'text/html'
    });
    res.write('<h1> Server funcionando... </h1>');
    res.write('<p>MI sitio asombroso</p>');
    res.end();
});

server.listen(3000,'127.0.0.1',function(){
        console.log('> Server corriendo en http://127.0.0.1:3000 ...');
    });