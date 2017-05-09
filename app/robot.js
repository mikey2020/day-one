class Robot{//A robot class
	constructor(name){//a constructor initializing robot properties
		this.name = name;
		this.version = "1.00";
		this.power = 10000;
		this.bodyParts = ["head","hands","legs"];
		this.bodyPartsMaterial = "steel";
		this.functionsList = ["move"]
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

class Android extends Robot {
	greet(){
		this.functionsList.push("talk","walk","run");
		this.version = "1.01";
		console.log("Hello i am Android " + this.version);
	}
	move(direction){
		greet();
		this.power = 1000000;
		if(this.checkDatabase(direction) == true){
			this.power -= 30;
			return this.name + "moving " + direction + ".........." + "\n" + "Power level: " + this.power;
		}
		else{
			return "please enter valid direction";
		}
	}
}
let user = new Android("chappie");
console.log(user.interface("move","west"));
console.log(user.interface("move","north west"));