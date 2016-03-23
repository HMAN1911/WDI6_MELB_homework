/*console.log('Best IceCream EVER');

 
var favIceCream = ["strawberries","vanilla","choc chip","rocher"];

console.log('My #1 choice is ' + favIceCream[0]);
console.log('My #2 choice is ' + favIceCream[1]);
console.log('My #3 choice is ' + favIceCream[2]);
console.log('My #4 choice is ' + favIceCream[3]);

//Write a for loop that will iterate from 0 to 20. 
//For each iteration, it will check if the current number 
//is even or odd,
// and report that to the screen (e.g. "2 is even").



for(var i = 0; i < 20 ;i++){
	console.log(i);

if(currentNumber % 2 === 0){
	console.log(i + "is even!");
}
else{
	console.log(i + " is odd");
}

} */

console.log ('choices');

var simpson = ['homer', 'lisa', 'bart', 'maggie', 'ned'];

var suffix = ['st', 'nd', 'rd', 'th']

for(var i =0; i < simpson.length; i++) {
	console.log(simpson.length[i]);
	console.log(suffix[i]);
}


//if you wanna use a while loop you need a prompt from the user.
// Just be careful cause the prompt will always turn in strings, so if you have 
// to compare your prompt to a number you need to transform the prompt in number as you can
// see below.

console.log('Guessing game');

var secretNumber = 42;

var guess = Number( prompt('Guess a number between 1 and 5') );

while (guess !== secretNumber) {
	console.log('you fail life');
	console.log('guess' , guess);  //just to display your guess 
	guess = Number (prompt('guess a number between 1 and 5') );
		
}

/*Write a for loop that will iterate from 0 to 10. 
For each iteration of the for loop, it will multiply 
the number by 9 and log the result (e.g. "2 * 9 = 18").
Bonus: Use a nested for loop to show the tables for every 
multiplier from 1 to 10 (100 results total).*/

for(i = 0; i <= 10; i++) {
	
	var multiplier = 9;

	var result = i * multiplier;

	console.log(result);

	for(multiplier = 0; multiplier <= 10; multiplier++) {
		var result2 = multiplier * result;
		console.log(result2);
	}

}

for (i = 1; i <=10 ; i++) {
	console.log('9 x ' + i + ' = '+ 9 * 1);

//this loop goes 10 times per the times that my preview loop goes
	for (var j = 1; j <= 10 ; j++) {
		console.log(j + ' x ' + i + ' = ' + j*i);
	}

}

/*On the menu tonight: Steak, fruit salad, 
tofurkey, pork chops.

Directions to students:

prompts the user for their menu choice and assign 
it to a variable.

If a vegan can eat it, return "This cuisine is 
vegan friendly."
Otherwise, return "Vegans beware!"
For the sake of this exercise. 
Hint: Two identical strings are considered to be equal 
to each other.*/


/*
var userChoice = prompt("What is gonna be your choice?");



if (userChoice === 'tofurkey') {
	console.log('This cuisine is vegan friendly');
 }

 else if (userChoice === 'fruit salad' ) {
 	console.log('This cuisine is vegan friendly');
 }
 else {
 	console.log('Vegan Beware!');
 }

// else {
// 	console.log('Vegans beware!');
// }
*/

var menu = ['steak', 'pork chops', 'fruit salad','tofurkey'];

var choice = 'steak';

if (choice === 'steak' || choice === 'pork chops') {

	console.log('meat');
}
else {
	conosole.log('vegan');
}








