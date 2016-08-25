var person={
	firstname: 'ifti',
	isProgrammer: true
};

console.log(JSON.stringify(person));

var JSONObj = JSON.parse('{"firstname": "ifti","isProgrammer":true}');

console.log(JSONObj);
