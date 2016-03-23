var secretNumber = prompt("Give us a secret number!","defaultText");
var counter = 0

alert("Are you ready to guess the secret number?")

while (secretNumber != input) {
    if (counter === 0){
        var input = prompt("Guess a number between 1 and 20","defaultText");
        counter ++;
        if (input == secretNumber){
	       alert("you ultra win!");
        }
	}
        
        
	else {
	    var input = prompt("You fail at life! Guess again","defaultText");
	    if (input == secretNumber){
	       alert("you ultra win!");
	    }
	}

}