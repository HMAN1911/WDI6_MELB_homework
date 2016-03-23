console.log('--PTV Journey Planner--');

var trainLines = [
  ['flinders street', 'richmond', 'east richmond', 'burnley', 'hawthorn', 'glenferrie'], //alamein
  ['flagstaff', 'melbourne central', 'parliament', 'richmond', 'kooyong', 'tooronga'], // glen
  ['southern cross', 'richmond', 'south yarra', 'prahran', 'windsor'], // sandy
]

var stationFinder = function(origin, destination) {

  // finds the origin line indices.
    for (var i = 0; i < trainLines.length; i ++) {
      for (var j = 0; j < trainLines[i].length; j ++) {
          if (trainLines [i][j] === origin) {
            var start = [i,j];
            var startLine = i;
      }
    }
  }
  // finds the destination line indices.
    for (c = 0; c < trainLines.length; c ++) {
      for (var a = 0; a < trainLines[c].length; a ++) {
           if (trainLines [c][a] === destination) {
            var end = [c, a];
            var endLine = c;
       }
     }
  }

  if (start == 0) {
    console.log('this statement works 0');
    var startingAlamein = trainLines.slice([start][0,1]);
  }
  else if (startLine == 1) {
    console.log('this statement works 1');
    var startingGlen = trainLines.slice(start,[1,4]);
    //pushes whole bloody nested array or nothing! in!
  }
  else if (start == 2) {
    console.log('this statement works 2');
    var startingSandy = trainLines.slice([start][2,1]);
  }

  //debugger
  console.log(start);
  console.log(end);
  console.log(startingAlamein);
  console.log(startingGlen);
  console.log(startingSandy);

}

stationFinder('melbourne central', 'melbourne central');

var journeyPrinter = function() {
// slice first part of journey to Richmond (add to new array)
// for a flagstaff to windsor journey, array1 should return flagstaff to richmond
var alameinTest = ['flagstaff', 'melbourne central', 'parliament', 'richmond', 'kooyong', 'tooronga'];
var sandyTest = ['southern cross', 'richmond', 'south yarra', 'prahran', 'windsor'];
var array1 = alameinTest.slice(0, 3);
var array2 = sandyTest.slice(2, 4);

// then concatenate the two arrays, get the length, then print out.
var fullJourney = array1.concat(array2);
console.log('your stops are: ' + fullJourney);
console.log('you have: ' + fullJourney.length + ' stops in your journey');

}

// journeyPrinter();
