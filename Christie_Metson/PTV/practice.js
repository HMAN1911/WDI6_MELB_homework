function publicTransportPlanner (origin,destination) {
  //declaring arrays
  var alameinLine = ["alameinLine","flinders street","richmond","east richmond","burnley","hawthorn","glenferri"];
  var glenWaverlyLine = ["glenWaverlyLine","flagstaff","melbourne central","Parliament","richmond","kooyong","tooronga"];
  var sandringham = ["sandringham","southern cross","richmond","south yarra","prahran","windsor"];

  var trainLines=[alameinLine,glenWaverlyLine,sandringham];

  //comparing origin and destination with trainLines arrays
  for (var i=0; i<trainLines.length; i++) {
    for (var j=0; j<trainLines[i].length;j++) {
      if(origin === trainLines[i][j]) {
        console.log("you need to catch "+ trainLines[i][0]+ " line at "+origin);
        var originIndex1 = i;
        var originIndex2 = j;
      }
    }
  }

  //finding destination in trainLines
  for (var i=0; i<trainLines.length; i++) {
    for (var j=0; j<trainLines[i].length;j++) {
      if(destination === trainLines[i][j]) {
        var destIndex1 = i;
        var destIndex2 = j;
      }
    }
  }
  //finding the stop
  if(originIndex1 === destIndex1){
    console.log("No stop, Please continue on same line");
  }
  else {
    for(var i=0; i<trainLines[originIndex1].length; i++) {
    for(var j=0; j<trainLines[destIndex1].length; j++) {
      if(trainLines[originIndex1][i] === trainLines[destIndex1][j]) {
        console.log("You need to change at "+trainLines[originIndex1][i]  );
      }
    }
  }

  console.log("Than you need to catch "+ trainLines[destIndex1][0]+ " line to get to "+destination);
      }
}

publicTransportPlanner('southern cross', 'south yarra');
