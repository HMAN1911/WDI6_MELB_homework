// The Vegan Test
// On the menu tonight: Steak, fruit salad, tofurkey, pork chops.
// prompts the user for their menu choice and assign it to a variable.
// If a vegan can eat it, return "This cuisine is vegan friendly."
// Otherwise, return "Vegans beware!"
// For the sake of this exercise. Tofurkey is definitely vegan friendly.
// Hint: Two identical strings are considered to be equal to each other.


var veganOptions = ['tofurkey', 'fruit salad'];

var menu = prompt("What would you like to choose for dinner?");

if (veganOptions.indexOf(veganOptions) >= 0) {
  alert("This cuisine is vegan friendly!")
}

else {
  alert("Vegans beware!")
}
