/* Create an array to hold your top choices (colors, presidents, whatever).
​ For each choice, log to the screen a string like: "My #1 choice is blue."
​ Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
 picking the right suffix for the number based on what it is.*/
// create an array, '' for STRINGS!
var crusine = ['Italian', 'Thai', 'Chinese', 'Austrian'];

// create variable to count, be aware to use [] for an array
var count = ['1st', '2nd', '3rd', '4th'];

/* Debugger to see what's happening, step through each step. i is a random variable,
can be any other too.*/
/*debugger;
console.log(i);
*/

// Easy Way
/*
console.log('My #1 choice is ' + crusine[3]);
console.log('My #2 choice is ' + crusine[0]);
console.log('My #3 choice is ' + crusine[1]);
console.log('My #4 choice is ' + crusine[2]);
*/

/*for is for an loop, define variable i=0(index of array, first entry,
exp. here Italian)
i < crusine.length to limit it to the maximum of 4 entry hence, number 3
(array starts with 0 = first entry)
i++ after finishing the loop it will add 1 to i and start again*/
for (var i=0; i < crusine.length; i++) {
  console.log('My ' + count[i] + ' choice is ' + crusine[i] + '.')
}

//-----
/* Write a for loop that will iterate from 0 to 20. For each iteration,
it will check if the current number is even or odd, and report that
to the screen (e.g. "2 is even").*/

/* for to start the loop, define var i as 0, condition run up to 20, i++ after
finising add 1 to var i and start again.
if i divided by 2 is 0, say i is even, otherwise say i is odd
=== 0 is the remainder
i come from 0 to 20, return if even or odd because of remainder of 0 (=== 0)*/
for (var i=0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + ' is even');
  }
  else { console.log(i + ' is odd');
  }
}


//-----
/*Write a for loop that will iterate from 0 to 10.
For each iteration of the for loop, it will multiply the number
by 9 and log the result (e.g. "2 * 9 = 18").
​Bonus: Use a nested for loop to show the tables for every multiplier
from 1 to 10 (100 results total).
i not in '' because it is a number*/

for (var i=0; i <=10; i++) {
  console.log(i + '*' + '9' + '=' + i * 9);
}

/* 10 times 10, define a second variable*/
for (var i=0; i <=10; i++) {
  for (var j=0; j <=10; j++) {
  console.log(i + '*' + j + '=' + i * j);
}
}
//-----
/**On the menu tonight: Steak, fruit salad, tofurkey, pork chops.*
​####Directions to students:
​prompts the user for their menu choice and assign it to a variable.
​- If a vegan can eat it, return "This cuisine is vegan friendly."
- Otherwise, return "Vegans beware!"
- For the sake of this exercise. Tofurkey is definitely vegan friendly.
​**Hint**: Two identical strings are considered to be equal to each other.
​*/

var menu = ['fruit salad', 'tofurkey'];
var choice = prompt('Your menu choice');
  if (menu.indexOf(choice) >= 0) {
    alert('The cruise is vegan friendly.')
  }
    else {
      alert('Vegans beware!')
    }
