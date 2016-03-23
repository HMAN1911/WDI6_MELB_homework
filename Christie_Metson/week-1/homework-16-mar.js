// does it work?

console.log('its the fucking catalina wine mixer');

// 1. Your top choices

var soundOfMusic = ['whiskers on kittens', 'warm woolen mittens', 'bright copper kettles'];
var suffix = ['st', 'nd', 'rd', 'th']

for (var i = 0; i < soundOfMusic.length; i++) {

  var choice = 0;

  if (i === 0) {
    choice = '1st';
  }
  else if (i === 1) {
    choice = '2nd';
  }
  else if (i === 2) {
    choice = '3rd';
  }
  else {
    choice = i;
  }

  console.log('my ' + choice + ' choice is ' + soundOfMusic[i]);
};

// 2. The even/odd reporter

for (var i = 0; i < 21; i ++) {
  if (i % 2 === 0) {
    console.log('number ' + i + ' is even');
  }
  else {
    console.log('number ' + i + ' is not even');
  }
}

// 3. Multiplication Tables
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
// I still don't get what this means :) I'll wait till tomorrow for more information.

for (var i = 0; i <= 10; i++) {

  var multiplied = i * 9;
  console.log(i + ' * 9 = ' + multiplied);

  // for (var g = 1; g <= 10; g++) {
  //   console.log(j + 'x' + i '= ' j * i)
  // };
};

// 4. The Vegan Test

do {

var menu = [' steak',' fruit salad', ' tofurkey', ' pork chops '];
studentSelection = prompt('Please make a selection from: ' + menu);

if (studentSelection === 'tofurkey' || studentSelection === 'fruit salad') {
  alert("You've selected a vegan meal - the animals thank you :)");
}
else if (studentSelection === 'steak' || studentSelection === 'pork chops') {
  alert("You are a one bad arse carnivore.");
}
else {
  alert("I didn't get that - please try again.");
}

} while (
          studentSelection != 'steak'
          && studentSelection != 'pork chops'
          && studentSelection != 'fruit salad'
          && studentSelection != 'tofurkey'
        )
