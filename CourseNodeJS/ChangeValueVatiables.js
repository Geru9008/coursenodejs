var http =  require('http');

var fs =  require('fs');


http.createServer(function(request, response){
fs.readFile("Index.html", function(error, data){

var chain =  data.toString();

var works =  "Funciona";

var vaia =  "cambiado";

var variables =   chain.match(/[^\{\}]+(?=\})/g);

console.log(variables);

for (i = variables.length -1; i>=0; i--){
	
	var value = eval(variables[i]);
		chain =  chain.replace("{"+variables[i]+"}", vaia);
	
}
	


response.writeHead(200, {"Content-Type" :  "text/html"});

response.write(chain);

response.end();

});

}).listen(8080);