// Polly fill and Creating Object in a new way

var person = {
	firstname : 'Iftikhar',
	lastname: 'uddin',
	welcome: function(){
		return 'Hello' + this.firstname;
	}
}

var ifti = Object.create(person);
console.log(ifti);