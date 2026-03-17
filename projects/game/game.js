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
    print("\nYou had just came outside, because your bathtub had exploded... " + "Why? You put your toaster in it... " + " You need a new toaster. Let's see if the neighbor has one.");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tThe street" + "\n\tNeighbors House");
    
    function processInput(input){
        if (input.toLowerCase() === "The street") {
		print("\nYou decide to walk down the street for some reason, " + "even though YOU WERE SUPPOSED TO GO TO THE NEIGHBORS HOUSE. " + "Anyway, you trip and fall on a stick and *unfortunately* pass away :3.");
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

	print("\nRestart?" + " yes or no");

		function processInput(input){
			if (input.toLowerCase() === "yes" {
				lose();
			} else if (input.toLowerCase() === "no") {
				print("Too bad.");
				lose();
			}
		}
		waitForInput(processInput);
	}

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

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            locationA();
    }
    waitForInput(processInput);
}
