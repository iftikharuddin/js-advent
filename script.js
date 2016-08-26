//using an Immediately Invoked Function Expression (IIFE)s
var funk = function(name){
	console.log("Hey " + name);
}('Ehehehe');

//JavaScript is cool
(function(name){
	console.log("Hey " + name);
}('Tony is awesome')); //IIFE trick