//object storing all possible lines, assuming richmond intersection
var allLines = {
  alamein: ['FlindersStreet', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  glenWaverly: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  sandringham: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
};

//generic function to find a station among all lines.

var finder = function(stopName, allLines) {
  var returnLine = 0;
  var lineName = '';
  //for in... loop to loop over keys of an object.
  for (line in allLines) {
    if (allLines[line].indexOf(stopName) !== -1) {
      returnLine = allLines[line].indexOf(stopName);
      lineName = line;
    }
  }
  return [returnLine, lineName];
};

//function to map a path TO richmond FROM a provided station.

var toRichmond = function(array) {
  var returnLine = array[0];
  var lineName = array[1];
  var richmond = allLines[lineName].indexOf('Richmond');
  //NOTE: the call to slice is needed so that the original array is not mutated.
  var temp = allLines[lineName].slice();
  console.log('Start from ' + lineName + ' line:');
  if (richmond > returnLine) {
    temp = temp.splice(returnLine, richmond + 1);
    return temp.join(" ----->  ");
  } else {
    temp = temp.splice(richmond, returnLine);
    return temp.reverse().join(" -----> ");
  }
};

//fuction to map a path FROM richmond TO a provided station.

var toDestination = function(array) {
  var returnLine = array[0];
  var lineName = array[1];
  var richmond = allLines[lineName].indexOf('Richmond');
  //NOTE: the call to slice is needed so that the original array is not mutated.
  var temp = allLines[lineName].slice();
  console.log('Change to ' + lineName + ' line:');
  if (richmond > returnLine) {
    temp = temp.splice(returnLine, richmond + 1);
    return temp.reverse().join(" -----> ");
  } else {
    temp = temp.splice(richmond, returnLine);
    return temp.join(" -----> ");
  }
}

console.log(toRichmond(finder('Hawthorn', allLines)));
console.log(toDestination(finder('Windsor', allLines)));

//sample output:

// Start from alamein line:
// Hawthorn -----> Burnley -----> East Richmond -----> Richmond
// Change to sandringham line:
// Richmond -----> South Yarra -----> Prahran -----> Windsor
