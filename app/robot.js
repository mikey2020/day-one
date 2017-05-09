class Robot{//A robot class
	constructor(name){//a constructor initializing robot properties
		this.name = name;
		this.version = "1.00";
		this.maxPower = 10000;
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
		//this.speed = "10cm/sec";
		if(this.checkDatabase(direction) == true){
			this.power -= 10;
			return this.name + "moving " + direction + ".........." + "\n" + "Power level: " + this.power;
		}
		else{
			return "please enter valid direction";
		}
	}

	recharge(){
		while(this.power < this.maxPower){
			this.power++;
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
	getInformation(){
		console.log("Hello i am Android " + this.version);
		this.functionsList.push("talk","walk","run");
		for(let action in this.functionsList){
			console.log("i can " + action);
		}
		this.version = "1.01";
		
	}
	move(direction,speed){
		this.power = 1000000;
		if(this.checkDatabase(direction) == true && speed){
			this.power -= 30;
			return this.name + " moving " + direction + ".........." + "at " + speed +"m/secs" + "\n" + "Power level: " + this.power + " watts";
		}
		else{
			return "please enter valid direction";
		}
		//this.recharge();
	}
	interface(action,actionArgument,actionArgument1){
		if(action === "move"){
			console.log(actionArgument);
			console.log(this.move(actionArgument,actionArgument1));
		}
        
		return this.name + " just " + action +  "d " + actionArgument + "at " + actionArgument1 + "m/secs";

	}
	
}
/*let user = new Android("chappie");
console.log(user.interface("move","west",200));
console.log(user.interface("move","north west",100));
user.walk();*/