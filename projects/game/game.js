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

function outside() {
    clear();
    print("\nYou had just came outside, because your bathtub had exploded... " + " You need a new toaster.");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tstreet" + 
	"\n\tneighbors"); 
	function processInput(input){
        if (input.toLowerCase() === "street") {
		print("\nYou decide to walk down the street for some reason, " + "even though YOU WERE SUPPOSED TO GO TO THE NEIGHBORS HOUSE. " + "Anyway, you trip and fall on a stick and *unfortunately* pass away :3. " + "Refresh to restart.");

	} else if (input.toLowerCase() === "neighbors") {
		neighborsHouse();
	}
    }
	waitForInput(processInput);
}		

function neighborsHouse() {
    clear();
    print("\nYou snuck into the neighbors house.");
	print("\nNot really... You went in through the front door. You can hear the neighbor sleeping... DOnt wake him!");
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
					print("\nWhere will you use this key?" + "\n\tupstairs" + "\n\tLiving room");
					function processInput(input) {
						if (input.toLowerCase() === "upstairs") {
							upstairs();
						} else if (input.toLowerCase() === "living room") {
							livingRoom();
						} else {
							stayHere();
						}
					}
					}
			}
			waitForInput(processInput);
		}
	}waitForInput(processInput);
}


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
