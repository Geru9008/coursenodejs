var http = require('http');

var fs =  require ('fs');


http.createServer(function(request, response){
response.writeHead(200, {"Content-Type" : "application/json"});
var conversion = JSON.stringify({"user" : {"name" :  "Geru", "password" : "nodejs" }, 
"ocupation" : {"work" : "programmer"}, "age" : 26});
response.write(conversion);
console.log(conversion);
response.end();
}).listen(8080);

