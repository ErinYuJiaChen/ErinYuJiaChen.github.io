let gameActive = true; //this variable is required. 
              //to stop the game, set it to false.
let hidAlready = false;
let haveKey = false;

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function lose(){
	clear();
	start();
}

function outside() {
    clear();
    print("\nYou had just came outside, because your bathtub had exploded... " + " You need a new toaster.");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tThe street" + 
	"\n\tNeighbors House");
    
    function processInput(input){
        if (input.toLowerCase() === "The street") {
		print("\nYou decide to walk down the street for some reason, " + "even though YOU WERE SUPPOSED TO GO TO THE NEIGHBORS HOUSE. " + "Anyway, you trip and fall on a stick and *unfortunately* pass away :3. " + "Refresh to restart.");
		print("\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣶⣄⠀
⠀⠀⠀⣾⣿⣷⡀⠀⠀⠀⠀⠸⣿⣿⣿⣄⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⡿⠀
⠀⠀⠀⠻⣿⣿⣿⣦⡀⠀⠀⠀⠹⣿⣿⣿⣆⠀⠀⢀⣾⣿⣿⣿⠿⠛⠋⠁⠀⠀
⠀⠀⠀⠀⠙⢿⣿⣿⣿⣆⠀⠀⠀⠙⣿⣿⣿⣧⠀⣾⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⠀⠀⣠⣴⣿⣿⣿⣿⣷⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣴⣾⣿⣷⣦⡹⣿⣿⣿⣿⣿⠟⠉⠀⠀⠀⢀⣤⣾⣿⣆⠀⠀⠀⠀⠀⠀⠀
⠀⣾⣿⣿⣿⣿⣿⣷⠘⣿⣿⣿⣿⣷⣦⣄⣠⣾⣿⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀
⠀⠻⣿⣿⣿⣿⣿⠏⠀⠀⠉⠛⠿⢿⣿⣿⣿⣿⣿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠈⠛⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
		gameActive=false;

	} else if (input.toLowerCase() === "neighbors house") {
		neighborsHouse();
	} else {
		stayHere();
		

function neighborsHouse() {
    clear();
    print("\nYou snuck into the neighbors house.");
	print("\nNot really... You went through the front door.");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tKitchen" + "\n\tUpstairs" + "\n\tliving room");
	function processInput(input){
		if (input.toLowerCase() === "kitchen") {
			print("\nYou go to the kitchen and look around.");
			print("\nTheres some funky stuff. There's exactly 50 loaves of bread, but no toaster!");
			print("\nYou end up finding a key schmack on the counter.");
			print("\nTake it? Yes or no.");

			function processInput(input) {
				if (input.toLowerCase() === "yes") {
					haveKey = true;
					clear();
					print("\nYou have a random key now. You should look for where it goes.");
				} else {
			stay();
				}
			}
			waitForInput(processInput);

    
    function processInput(input){
        if (input.toLowerCase() === "locationa") {
            locationA();
        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}
function begin(){
	clear();
	if (haveKey === true){
		print("\nYou go into the bedroom, where there's a secret safe...");
		print("\nLuckily, you have a random key from the kitchen!");
		print("\nYou use it to unlock the safe, containing the magical golden toaster!");
		print("\nThe neighbor sees you and chases you out, but you manage to escape");
		print("\nGood job! The end.");
	} else { 
		print("\nCough cough, you blew up your bathtub... ");
		print("\nLuckily you're fine. Although your toaster isnt fine.");
		print("\nYou remember your neighbor has an awesome golden limited toaster...");
		print("\nGo steal it! Type outside to go outside.");
	}
	function processInput(input){
		if (input.toLowerCase() === "outside") {
			outside();
		} else {
			stayHere();
			waitThenCall(begin);
		}
	}
	waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("\nOne day, you're chilling in your house when you suddenly " + "discover the urge to put your toaster in the bathtub. " + "Kaboom!" + " Type start to continue.");
	print("\n\n\n");
	let start = " Start "
    function processInput(input){
            if (input.toLowerCase() === "start") {
		    begin();
	    } else { 
		    stayHere();
	    }
    }
	waitForInput(processInput);
}
