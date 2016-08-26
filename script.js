var c = {
	name: 'dash',
	log: function(){
		var self = this;
		self.name = 'What';
		console.log(self);
		var setname = function(newname){
			self.name = newname;
		}
		setname('new name updated');
		console.log(self);
	}
	
}

c.log();