

function  valueisReturned(request){

var information = request.split("?");

var value =  {};

var iterator = 0;




while(iterator < information.length){
if(iterator > 0){
	value = information[iterator].split("=");
}

	iterator++;
}


var valor =  value[1].split("+");

for(var i=0; i < valor.length; i++){

if(i > 0){

value[1]+=  " " + valor[i];
}

else {
	value[1]= valor[i];
}

console.log("nuevo valor " +  value[1]);

}

return value[1]

}

module.exports.valueisReturned =  valueisReturned;