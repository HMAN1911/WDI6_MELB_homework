// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
// picking the right suffix for the number based on what it is.

var myFavouriteFoods = ['sushi', 'oatmeal', 'oysters', 'lamb'];
for (var i = 0; i < myFavouriteFoods.length; i+=1) {
  console.log('My #' + (i+1) + ' choice is ' + myFavouriteFoods[i]);
}

// Write a for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

var x = 20;
for (var i = 0; i < x; i += 1) {
  console.log('2 is even' + (i=2)); // 
