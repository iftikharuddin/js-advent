//Understanding Closures
function buildFunctions(){
	//empty array
	var arr = [];
	
	for(i = 0; i < 3; i++){
		arr.push(
			function(){
				console.log(i);
			}
		)
	}
	return arr;
	
}

var another = buildFunctions();
another[0]();
another[1]();
another[2]();

//Understanding Closures
function buildFunctions2(){
	//empty array
	var arr = [];
	
	for(i = 0; i < 3; i++){
		arr.push(
			(function(j){
				return function(){
					console.log(j);
				}
			}(i))
		)
	}
	return arr;
	
}

var another1 = buildFunctions2();
another1[0]();
another1[1]();
another1[2]();