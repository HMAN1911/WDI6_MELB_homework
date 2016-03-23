// # Your top choices
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
var colors = ['Black', 'White', 'Blue'];
for (var i = 0; i < colors.length; i++) {
    console.log('My #' + (i+1) + ' choice is ' + colors[i]);
}

// # The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for (var i = 0; i <= 20; i ++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

// # Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
for (var i = 0; i <= 10; i++) {
  console.log(i + " * 9 = " + (i * 9));
}

for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= 10; j++) {
    console.log(i + " * " + j + " = " + (i * j));
  }
}

// # The Vegan Test
// *On the menu tonight: Steak, fruit salad, tofurkey, pork chops.*
// ####Directions to students:
// prompts the user for their menu choice and assign it to a variable.
//  - If a vegan can eat it, return "This cuisine is vegan friendly."
//  - Otherwise, return "Vegans beware!"
//  - For the sake of this exercise. Tofurkey is definitely vegan friendly.
// **Hint**: Two identical strings are considered to be equal to each other.

var veganPoison = ['Steak', 'Pork Chops'];
var veganMenu = ['Fruit Salad', 'Tofurkey'];
var nom = prompt('Enter Menu Choice.');
var matched = false;

for (var i = 0; i < veganMenu.length; i ++) {
  if (nom.toLowerCase() === veganMenu[i].toLowerCase()) {
    console.log('This cuisine is vegan friendly.');
    matched = true;
  }
}

for (var i = 0; i < veganPoison.length; i++) {
  if (nom.toLowerCase() === veganPoison[i].toLowerCase()) {
    console.log('Vegans BEWARE!!!');
    matched = true;
  }
}

if (matched === false) {
  console.log('Item not on menu!');
}
