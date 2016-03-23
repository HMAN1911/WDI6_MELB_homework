//NUMBER 1

var favouriteColors = ['red', 'blue', 'green', 'purple', 'yellow'];
var suffixes = ['st', 'nd', 'rd', 'th'];

for (var i = 0; i < favouriteColors.length; i++ ) {
	if (i === 3) {
		suffixes.freeze(consts);
	}
	console.log("My " + i + suffixes + " choice is " + favouriteColors[i]);
}

//Number 2

for (var i = 0; i <= 20; i++) {
	if (i % 2 === 0) {
		console.log(i + " is an even number");
	} 
}

//Number 3

for (var i = 0; i <= 10; i++) {
		for(var x = 0; x<=10; x++){
				console.log(i * x);
		}		
}

//Number 4

var studentChoice = prompt("What do you want to eat?");

if (studentChoice === "Steak" || studentChoice === "pork chops") {
	console.log("Vegans beware!"); 
}
else if (studentChoice === "Steak" || studentChoice === "pork chops")
{
	console.log("This cuisine is vegan friendly.");
}




//# Your top choices
​
//Create an array to hold your top choices (colors, presidents, whatever).
​
//For each choice, log to the screen a string like: "My #1 choice is blue."
​
//Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
​


//# The even/odd reporter
​
//Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
​


//# Multiplication Tables
​
//Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
​
//Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
​


//# The Vegan Test
​
//*On the menu tonight: Steak, fruit salad, tofurkey, pork chops.*
​
//#Directions to students: 
​
//prompts the user for their menu choice and assign it to a variable.
​
// - If a vegan can eat it, return "This cuisine is vegan friendly."
// - Otherwise, return "Vegans beware!"
// - For the sake of this exercise. Tofurkey is definitely vegan friendly.
​
//**Hint**: Two identical strings are considered to be equal to each other.
