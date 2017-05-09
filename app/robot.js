class Robot{//A robot class
	constructor(name){//a constructor initializing robot properties
		this.name = name;
		this.version = "1.00";
		this.power = 10000;
		this.bodyParts = ["head","hands","legs"];
		this.bodyPartsMaterial = "steel";
		this.functionsList =
		this.database = ["west","east","north","south","north west","south west","south east","north east"];
	}

	checkDatabase(data){
		if(this.database.indexOf(data) > -1){
			return true;
		}
		else{
			return false;
		}
	}

	move(direction){
		if(this.checkDatabase(direction) == true){
			this.power -= 10;
			return this.name + "moving " + direction + ".........." + "\n" + "Power level: " + this.power;
		}
		else{
			return "please enter valid direction";
		}
	}

	interface(action,actionArgument){
		if(action === "move"){
			console.log(actionArgument);
			console.log(this.move(actionArgument));
		}
        
		return this.name + " just " + action +  "d " + actionArgument;

	}
}