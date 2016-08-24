var ifti = {
	passion: "web",
	love: "Salena Gomez",
	address:{
		street: "23 House dash",
		name: "Tony Brown"
	}
};

function welcome(person){
	document.write("<marquee> Hi " + person.love );
	document.write("</marquee>");
}
function welcome2(person){
	document.write("<marquee direction='right' style='color:green'> Hi " + person.love );
	document.write("</marquee>");
}
welcome(ifti);
welcome({
	love: "Olamba",
	passion:"JavaScript"
});

for(i = 0; i<=10; i++){
	if(i%2 === 0){
		welcome2(ifti);
	}else{
		welcome(ifti);
	}
}

