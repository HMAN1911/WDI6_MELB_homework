
//Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var favourites = ['Green','Trump Dump','Pizza','Dog'];
var count = ['1st','2nd','3rd','4th'];

for (var i=0; i < favourites.length; i++) {
//debugger
//console.log(i);
  console.log('My ' + count[i] + ' choice is ' + favourites[i]);
}


//Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for (var i=0; i < 21; i++){
  if (i % 2 === 0) {
    console.log(i+ ' is even');
  } else {
    console.log(i+ ' is odd');
  }
}

//Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).


for (var i = 0; i <= 10; i++) {
  //console.log ('9 x ' + i + ' = ' + (9 * i));
  for (var j =0; j <= 10; j++) {
    console.log (j + ' x ' + i + " = " + j * i );
  }
}



//On the menu tonight: Steak, fruit salad, tofurkey, pork chops.

var dinner = ['Steak', 'Fruit Salad', 'Tofurkey', 'Pork Chops'];
var menuChoice = prompt('What do you feel like eating?');

if (menuChoice === dinner[1] || menuChoice === dinner[2]) {
  console.log('The cusine is vegan friendly');
} else {
  console.log('Vegans beware!');
}
