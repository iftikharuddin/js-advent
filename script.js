// Don't use For in with arrays it will display the attached property in Prototype in result 
Array.prototype.hello = 'GitHub';
var arr = ['ifti', 'john', 'doe'];

for(var i=0; i< arr.length; i++){
	console.log(i + ': ' + arr[i])
}

for(var i in arr){
	console.log(i + ': ' + arr[i])
}