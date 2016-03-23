// Write a for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

var x = 20;
for (var i = 0; i < x; i += 1) {
  if (i % 2 == 0) {
    console.log(i + 'is even')
  }
  if (i % 2 !== 0) {
    console.log(i + 'is odd')
  }
}
// else {console.log(i + 'is odd')}
