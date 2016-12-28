var http = require('http');

var  serverImpl = function(request, response){
console.log("Recibiendo Informacion del server");
response.end("Hello Node JS");
};


var servidorSide =  http.createServer(serverImpl);

servidorSide.listen(8082);