var ifti = {
	passion: "web",
	love: "Salena Gomez",
	address:{
		street: "23 House dash",
		name: "Tony Brown"
	}
};

function welcome(person){
	console.log("Hi " + person.love);
}
welcome(ifti);
welcome({
	love: "Olamba",
	passion:"JavaScript"
});

