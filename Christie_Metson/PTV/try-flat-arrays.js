console.log('--PTV Journey Planner--');

var alameinLine = ['flinders street', 'richmond', 'east richmond', 'burnley', 'hawthorn', 'glenferrie'];
var glenLine = ['flagstaff', 'melbourne central', 'parliament', 'richmond', 'kooyong', 'tooronga'];
var sandyLine = ['southern cross', 'richmond', 'south yarra', 'prahran', 'windsor'];

var journeyPlanner = function(origin, dest) {

  var startLineString;
  var startIndex;

  if (alameinLine.indexOf(origin) != -1 ) {
    console.log('Get on the Alamein line at ' + origin + '.');
    startIndex = alameinLine.indexOf(origin);
    startLineString = 'alamein';
  }

  else if (glenLine.indexOf(origin) != -1 ) {
    console.log('Get on the Glen Waverly line at ' + origin + '.');
    startIndex = glenLine.indexOf(origin);
    startLineString = 'glen';
  }

  else if (sandyLine.indexOf(origin) != -1 ) {
    console.log('Get on the Sandringham line at ' + origin + '.');
    startIndex = sandyLine.indexOf(origin);
    startLineString = 'sandy';
  }

  var startArr = [];

  if (startLineString === 'alamein') {
    startArr = alameinLine.slice(startIndex, 2);
  }

  else if (startLineString === 'glen') {
    startArr = glenLine.slice(startIndex, 4);
  }

  else if (startLineString === 'sandy') {
    startArr = sandyLine.slice(startIndex, 2);
  }

  var destLineString;
  var destIndex;

  if (alameinLine.indexOf(dest) != -1 ) {
    console.log('Change to the Alamein line at Richmond.');
    destIndex = alameinLine.indexOf(dest);
    destLineString = 'alamein';
  }

  else if (glenLine.indexOf(dest) != -1 ) {
    console.log('Change to the Glen Waverly line at Richmond.');
    destIndex = glenLine.indexOf(dest);
    destLineString = 'glen'
  }

  else if (sandyLine.indexOf(dest) != -1 ) {
    console.log('Change to the Sandringham line at Richmond.');
    destIndex = sandyLine.indexOf(dest);
    destLineString = 'sandy'
  }

  var destArr = [];

  if (destLineString === 'alamein') {
    destArr = alameinLine.slice(2, destIndex + 1);
  }

  else if (destLineString === 'glen') {
    destArr = glenLine.slice(4, destIndex + 1);
  }

  else if (destLineString === 'sandy') {
    destArr = sandyLine.slice(2, destIndex + 1);
  }

  var wholeJourney = startArr.concat(destArr);
  var numOfStops = wholeJourney.length
  console.log('Here are all of your stops: ' + wholeJourney);
  console.log('You have ' + numOfStops + ' stops in total.')

}

journeyPlanner('Southern Cross', 'Tooronga');
