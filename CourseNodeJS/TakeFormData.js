var http = require('http'),
fs = require('fs');

var  valueReturned =  require('./Parseparams.js');


function returnValue(parametro){

var  firstval  =  parametro.split("?");

var  iterator =  0;

var   finalValue =  {};

while(iterator < firstval.length){
	
//console.log(firstval[iterator]);
	
	if(iterator > 0 ){
		//console.log(firstval[iterator]);
		finalValue =  firstval[iterator].split("=");
	}

iterator++;
}

return finalValue[1];

}


http.createServer(function(request,response){
fs.readFile("Index.html", function(error, data){	

console.log(returnValue(request.url));

var  saludo =  "saludos";

console.log(valueReturned);

var parametros  =  valueReturned.valueisReturned;

var  name = parametros(request.url);//returnValue(request.url);

var toChain =  data.toString();

var  datos = toChain.match(/[^\{\}]+(?=\})/g);



for(var i =  datos.length -1; i>=0; i--){

	switch(i){

    case 0:
    toChain =  toChain.replace("{"+datos[i]+"}", "Workout");
    break;
    case 1 : 
    toChain = toChain.replace("{"+datos[i]+"}", saludo);
    break;
    case 2 :
    toChain =  toChain.replace("{"+datos[i]+"}", "Bienvenido");
    break;
    case  3:
    toChain =  toChain.replace("{"+datos[i]+"}", name);
    break;
    default :
    toChain =  toChain.replace("{"+datos[i]+"}", "whathever");
    break;
	}
} 


response.writeHead(200, {"Content-Type" : "text/html"});
response.write(toChain);
response.end();


});

}).listen(8080);