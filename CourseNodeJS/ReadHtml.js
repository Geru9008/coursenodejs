var http = require('http');

var fs = require('fs');


var archivo =  fs.readFileSync('./Index.html');

http.createServer(function(request, response){

response.write(archivo);

response.end();

console.log("Response is over");

}).listen(8081);

