//call back functions

function sayHiLater(){
	var greeting = 'hi';
	
	setTimeout(function(){
		console.log(greeting);
		
	}, 3000);
}

sayHiLater();

//Call back
function hola(callback){
	var work = 12; //some work
	var work2 = 11; //another work
	
	callback();
}

hola(function(){
	console.log('Done boss');
});