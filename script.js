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