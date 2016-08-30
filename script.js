//apply bind call

var obj1 = {
	firstname: "Iftikhar",
	lastname: "Uddin",
	getFullname: function(){
		return this.firstname + ' ' + this.lastname;
	}
}

var obj2 = function(){
	var firstname = 'Olamba';
	return console.log(this.getFullname());

}.bind(obj1)();

