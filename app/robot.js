//A robot class
class Robot{

	//a constructor initializing robot properties
	constructor(name){
		//user defined robot name
		this.name = name;

		//robot version 
		this.version = "1.00";

		//amount of power robot can hold
		this.maxPower = 10000;

		//amount of power while running user's commands
		this.power = 10000;

		//robot's physical properties
		this.bodyParts = ["head","hands","legs"];
		this.bodyPartsMaterial = "steel";

		//robot's logical properties
		this.functionsList = ["move",,"check database","recharge"];
		this.database = ["west","east","north","south","north west","south west","south east","north east"];

		//to store user activity with robot
		this.log = [];
	}

	//robot checks if data is in its database
	checkDatabase(data){ 
		if(this.database.indexOf(data) > -1){
			return true;
		}
		else{
			return false;
		}
	}

	//move method that allows the robot to move 
	move(direction){
		if(this.checkDatabase(direction) == true){
			this.power -= 10;
			return this.name + "moving " + direction + ".........." + "\n" + "Power level: " + this.power;
		}
		else{
			return "please enter valid direction";
		}
	}

	// robot recharges until power is at max
	recharge(){
		while(this.power < this.maxPower){
			this.power++;
		}
		return "fully charged";
	}

	//allows users give robot commands
	do(action,actionArgument){
		if(action === "move"){
			console.log(actionArgument);
			console.log(this.move(actionArgument));
		}

		else if(action === "recharge"){
			return recharge();
		}
        
        this.log.push(this.name + " " +  action +  "d " + actionArgument)
		return this.name + " just " + action +  "d " + actionArgument;

	}

	//method to get user activity 
	getLog(){
		console.log("User activity log");
		return this.log;
	}
}

//child class of robot called Android
class Android extends Robot {

	//get Android Information
	tellMeAboutYourself(){
		this.version = "1.01";
		console.log("Hello i am Android " + this.version);
		this.functionsList.push("talk","move/walk","run/sprint");
		for(let count in this.functionsList){
			console.log("i can " + this.functionsList[count]);
		}

		console.log("You can issue commands to me using 'do' method");
		
		
	}
	move(direction,speed){
		this.power = 1000000;
		this.maxPower = 1000000;
		if(this.checkDatabase(direction) == true && speed){
			this.power -= 30;
			return "processing...............";
			//return this.name + " moving " + direction + ".........." + "at " + speed +"m/secs" + "\n" + "Power level: " + this.power + " watts";
		}
		else{
			return "please enter a valid direction";
		}
		//this.recharge();
	}
	
	do(action,actionArgument,actionArgument1){
		if(action === "move"){
			this.speak(actionArgument);
			this.speak(this.move(actionArgument,actionArgument1));
		}

		else if(action === "walk"){
			this.speak(actionArgument);
			this.speak(this.walk(actionArgument,actionArgument1));
		}

		else if(action === "run"){
			this.speak(actionArgument);
			this.speak(this.run(actionArgument,actionArgument1));
		}

		else if(action === "sprint"){
			this.speak(actionArgument);
			this.speak(this.sprint(actionArgument,actionArgument1));
		}


		else if(action === "recharge"){
			this.speak(recharge());
		}
        
        this.time = new Date();
        this.log.push(this.name + " " + action +  "d " + actionArgument + " at " + actionArgument1 + "m/secs" + " on " + this.time );
		
		return this.name + " just " + action +  "(e)d " + actionArgument + " at " + actionArgument1 + "m/secs";

	}

	speak(data){
		console.log(data);
	}

	walk(direction,speed,action="walk", maxSpeed=30){
		//this.maxSpeed = 30;
		if(speed <= maxSpeed){
			return this.move(direction,speed);
		}
		else{
			return "am sorry i cannot " + action + "  that fast";
		}
		
	}

	run(direction,speed,action="run",maxSpeed=60){
		return this.walk(direction,speed,action,maxSpeed);
	}

	sprint(direction,speed,action="sprint",maxSpeed=80){
		return this.run(direction,speed,action,maxSpeed);
	}

}
/*To use Android or Robot class you call the method directly or use 'do method' that allows 
you make method calls by justing typing their names and  to display results of some functions use console.log()
Example:

let andy = new Android("chappie");
andy.tellMeAboutYourself();
console.log(andy.do("sprint","west",10));

*/