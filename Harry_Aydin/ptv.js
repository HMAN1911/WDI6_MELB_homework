// ###PT PLANNER
// ####Melbourne Public Transport Journey Planner
//
// There are 3 train lines:
//
// The **Alamein** line has the following stops: Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, and Glenferrie.
//
// The **Glen Waverly** line has the following stops: Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong and Tooronga.
//
// The **Sandringham** line has the following stops: Southern Cross, Richmond, South Yarra, Prahran, and Windsor.
//
// ---
//
// All 3 train lines intersect at **Richmond**, but there are NO other intersection points as trains run express.
//
// Write a JS program that works out display the journey when you give it an origin and destination.
//
// example:
//
// ```
// Melbourne Central -----> Parliament -----> Richmond
//
// 2 stops total
// ```
//
// You may want to hard code the origin and destination for easier testing in the beginning.
//
// #####Hints:
//
// Consider diagramming the lines by sketching out the train lines and their stops and intersection.e each line and all the stops on each line.
//
// The key to the lab is the intersection of the lines at Richmond.
//
// ####Non-Required Bonus:
//
// * input validation
//   - User must enter a line and station in the subway network
//   - If the user enters something else, your program should handle it
// * Add additional lines
// * Allow trains to have multiple intersection points
//
//
// #### Resources
// [Here's a map of the train network to help](https://drive.google.com/a/generalassemb.ly/file/d/0Bx09n7UgX2HyaGswNVNWd3B0bEE/view?usp=sharing)

//object storing all possible lines, assuming richmond intersection
var allLines = {
  alamein    : ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  glenWaverly: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  sandringham: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
};

var journeyPlanner = function(startStation, endStation, linesObject) {

  if (!startStation || !endStation || !linesObject) {
    return 'you fail';
  }
  var returnObj         = {};
  returnObj.startedFrom = startStation;
  returnObj.goingTo     = endStation;
  var startingLocation  = finder(startStation);
  var endingLocation    = finder(endStation);

  if (destinationBeforeRichmond()) {
    return destinationBeforeRichmond();
  }

  returnObj.toRichmond = toRichmond(startingLocation);
  returnObj.toDestination = toDestination(endingLocation);

  function finder(stopName) {
    var indexOfStation = 0;
    var lineName       = '';

    for (line in linesObject) {
      if (linesObject[line].indexOf(stopName) !== -1) {
        indexOfStation = linesObject[line].indexOf(stopName);
        lineName = line;
      }
    }
    return [indexOfStation, lineName];
  }

  function toRichmond(array) {
    var indexOfStation       = array[0];
    var lineName             = array[1];
    var indexOfRichmond      = linesObject[lineName].indexOf('Richmond');
    var temp                 = linesObject[lineName].slice();
    returnObj.toRichmondLine = lineName;

    if (indexOfRichmond > indexOfStation) {
      temp = temp.splice(indexOfStation, indexOfRichmond + 1);
      return temp;
    } else {
      temp = temp.splice(indexOfRichmond, indexOfStation);
      return temp.reverse();
    }
  };

  function toDestination(array) {
    var returnLine              = array[0];
    var lineName                = array[1];
    var indexOfRichmond         = linesObject[lineName].indexOf('Richmond');
    var temp                    = linesObject[lineName].slice();
    returnObj.toDestinationLine = lineName;

    if (indexOfRichmond > returnLine) {
      temp = temp.splice(returnLine, indexOfRichmond + 1);
      return temp.reverse();
    } else {
      temp = temp.splice(indexOfRichmond, returnLine);
      return temp;
    }
  }

  function destinationBeforeRichmond() {
    var ending   = finder(endStation);
    var starting = finder(startStation);

    if (ending[1] === starting[1]) {
      var line = linesObject[starting[1]].slice();
      returnObj.toDestinationLine = ending[1];
      if (ending[0] < starting[0]) {
        returnObj.toDestination = line.splice(ending[0], starting[0]).reverse();
        return returnObj;
      } else {
        returnObj.toDestination = line.splice(starting[0], ending[0] + 1);
        return returnObj;
      }
    }
    return false;
  }
  return returnObj;
}

console.log(journeyPlanner('Windsor', 'Richmond', allLines));


//dom stuff

// var clickme = document.getElementById('clickme');
//
// function doIt() {
//   var start = document.getElementById('start').value;
//   var to = document.getElementById('end').value;
//
//   document.getElementById('output').innerHTML = toRichmond(finder(start, allLines));
//   document.getElementById('output2').innerHTML = toDestination(finder(to, allLines));
// }
//
// clickme.addEventListener('click', doIt);
