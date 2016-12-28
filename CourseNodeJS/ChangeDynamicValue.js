var http =  require('http');

var fs =  require('fs');

//createServer

http.createServer(function(request, response){

fs.readFile('Index.html', function(error, data){

var chainhtml = data.toString();


var  varone = "really Works";

var  vartwo =  "new values added";

var values =  chainhtml.match(/[^\{\}]+(?=\})/g);


console.log(values[0] + " "  +  values.length);

for(var i = values.length -1; i >=0; i--){

if(i >  0 ){
chainhtml =  chainhtml.replace("{"+values[i]+"}", vartwo);
}
else if(i == 0){
chainhtml =  chainhtml.replace("{"+values[i]+"}", varone);
}
}

response.writeHead(200, {"Content-Type" : "text/html"});
response.write(chainhtml);
response.end();

});

}).listen(8080);
