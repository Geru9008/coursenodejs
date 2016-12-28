var http =  require('http');

var fs =  require('fs');


http.createServer(function(request, response){

fs.readFile("./Index.html", function(error, data){
response.write(data);
response.end();
});

}).listen(8083);