

var stations = [
['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
];

var lines = ['alamein', 'glenWaverly', 'sandringham'];

// Setup the other variables
var getStartLine = '';
var getStartPoint = '' ;
var getEndLine = '';
var getEndPoint = ''; 


// Prompt to get the input from the user
getStartLine = prompt('What line are you starting at?');

// Get the index positions for the line.
setStartLine = lines.indexOf(getStartLine);

getStartPoint = prompt('What station does your trip start from, on line ' + lines[setStartLine]+ '?');

getEndLine = prompt('What line are you going to end at?');

// Get the index positions for the line.
setEndLine = lines.indexOf(getEndLine);
getEndPoint = prompt('What is your last stop on line ' +lines[setEndLine]+ '?');


// Get the index positions.

setStartPoint = stations[setStartLine].indexOf(getStartPoint);

setEndPoint = stations[setEndLine].indexOf(getEndPoint);


console.log('Your starting line is ' + lines[setStartLine]+ ' and your station is ' + stations[setStartLine][setStartPoint]+ '.\n Your ending line is ' + lines[setEndLine]+ ' and your ending station is ' + stations[setEndLine][setEndPoint]+ '.');

if (lines[setStartLine] === lines[setEndLine] ) {


console.log("You don't need to change line, your trip will go from " + setStartPoint + ' to ' + setEndPoint + 'with no interruptions');

}

// I think the logic is correct but there is something in the syntax wrong, but I can't figure out what.

else if (lines[setStartLine] === 'alamein' && lines[setEndLine] === 'glenWaverly') {


console.log("you are here")


      var jointPoint = stations[setStartLine].indexOf('Richmond');

    console.log(jointPoint);

       var partOne = [stations.slice(setStartPoint, jointPoint)];

    console.log(partOne);

    var partTwo = [stations.slice(jointPoint,setEndPoint)];

    console.log ('Your journey would be ' + partOne + partTwo);

}

else if (lines[setStartLine] === 'alamein' && lines[setEndLine] === 'sandringham') {

    var jointPoint = stations[setStartLine].indexOf('Richmond');

  console.log(jointPoint);

    var partOne = [stations.slice(setStartPoint, jointPoint)];

  console.log(partOne);

    var partTwo = [stations.slice(jointPoint,setEndPoint)];

  console.log ('Your journey would be ' + partOne + partTwo);
}

else if (lines[setStartLine] === 'glenWaverly' && lines[setEndLine] === 'sandringham') {

    var jointPoint = stations[setStartLine].indexOf('Richmond');


     var partOne = [stations.slice(setStartPnt, jointPoint)];

  console.log(partOne);

    var partTwo = [stations.slice(jointPoint,setEndPoint)];

  console.log ('Your journey would be ' + partOne + partTwo);

}

//unfortunally it won't work in opposite directions.
// I could have made other else/if statement for the opposite directions
// but since the first 3 don't work, I stop here till I understand better.



