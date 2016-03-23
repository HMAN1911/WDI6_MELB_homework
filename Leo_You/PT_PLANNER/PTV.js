console.log('PT PLANNER');
console.log('  ');
var Alamein =["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var GlenWaverly =["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
var Sandringham =["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];
var origin;
var destination;
var allLines = [
   ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
   ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
   ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
];
function searchStopNo(stopName){
   var lineStopNo;
   for(var i = 0; i < allLines.length; i++){
    var stopNo = allLines[i].indexOf(stopName);
    if (stopNo >= 0){
      var lineNo = i;
      lineStopNo =[lineNo,stopNo];
    }
  }
   return lineStopNo;
}


function isSameLine(lineStopNo1,lineStopNo2){
   if (lineStopNo1[0]===lineStopNo2[0]){
     return true;
   }else {
     return false;
   }
}

function countStopInSameLine(lineStopNo1,lineStopNo2){
    var stops = Math.abs(lineStopNo1[1]-lineStopNo2[1]);
    return stops;
}

function transferLine(lineStopNo1,lineStopNo2){
    //lineStopNo1 to Richmond.
    var journeyOne;
    var journeyOneStops;
    //Ricmond to lineStopNo2.
    var journeyTwo;
    var journeyTwoStops;

            switch (lineStopNo1[0]){
            case 0 :
            // the index of Ricmond in Alamein line is 1.
              if (1 >= lineStopNo1[1]) {
              journeyOne = Alamein.slice(lineStopNo1[1],1+1).join(" -----> ");
              }else {
              journeyOne = Alamein.slice(1,lineStopNo1[1]+1).reverse().join(" -----> ");
              }
            journeyOneStops = Math.abs(lineStopNo1[1]-1);
            break;
            case 1 :
            // the index of Ricmond in GlenWaverly line is 3.
              if (3 >= lineStopNo1[1]) {
              journeyOne = GlenWaverly.slice(lineStopNo1[1],3+1).join(" -----> ");
              }else {
              journeyOne = GlenWaverly.slice(3,lineStopNo1[1]+1).reverse().join(" -----> ");
              }
            journeyOneStops = Math.abs(lineStopNo1[1]-3);
            break;
            case 2 :
            // the index of Ricmond in GlenWaverly line is 1.
              if (1 >= lineStopNo1[1]) {
              journeyOne = Sandringham.slice(lineStopNo1[1],1+1).join(" -----> ");
              }else {
              journeyOne = Sandringham.slice(1,lineStopNo1[1]+1).reverse().join(" -----> ");
              }
            journeyOneStops = Math.abs(lineStopNo1[1]-1);
            break;
            }
       // search the journey from Ricmond to lineStopNo2.
            switch (lineStopNo2[0]){
            case 0 :
            // the index of Ricmond in Alamein line is 1.
              if (1 >= lineStopNo2[1]) {
              journeyTwo = Alamein.slice(lineStopNo2[1],1+1).reverse().join(" -----> ");
              }else {
              journeyTwo = Alamein.slice(1, lineStopNo2[1]+1).join(" -----> ");
              }
            journeyTwoStops = Math.abs(lineStopNo2[1]-1);
            break;
            case 1 :
            // the index of Ricmond in GlenWaverly line is 3.
              if (3 >= lineStopNo2[1]) {
              journeyTwo = GlenWaverly.slice(lineStopNo2[1],3+1).reverse().join(" -----> ");
              }else {
              journeyTwo = GlenWaverly.slice(3,lineStopNo2[1]+1).join(" -----> ");
              }
            journeyTwoStops = Math.abs(lineStopNo2[1]-3);
            break;
            case 2 :
            // the index of Ricmond in GlenWaverly line is 1.
              if (1 >= lineStopNo2[1]) {
              journeyTwo = Sandringham.slice(lineStopNo2[1],1+1).reverse().join(" -----> ");
              }else {
              journeyTwo = Sandringham.slice(1,lineStopNo2[1]+1).join(" -----> ");
              }
            journeyTwoStops = Math.abs(lineStopNo2[1]-1);
            break;
            }
        console.log("===================================================");
        console.log("   *At first you need to take the train from: ");
        console.log(journeyOne);
        console.log("   *and then transfer another line in Ricmond ");
        console.log(journeyTwo);
        console.log("===================================================");
        console.log("There are ( " + (journeyOneStops + journeyTwoStops) +" ) stops total.");

}

function printJourney(lineStopNo1,lineStopNo2){
   var journeys;
   if(isSameLine(lineStopNo1,lineStopNo2)){
       if (lineStopNo2[1] >= lineStopNo1[1]){
           switch (lineStopNo1[0]){
           case 0 :
           journeys = Alamein.slice(lineStopNo1[1],lineStopNo2[1]+1).join(" -----> ");
           break;
           case 1 :
           journeys = GlenWaverly.slice(lineStopNo1[1],lineStopNo2[1]+1).join(" -----> ");
           break;
           case 2 :
           journeys = Sandringham.slice(lineStopNo1[1],lineStopNo2[1]+1).join(" -----> ");
           break;
           }
       }else {
          switch (lineStopNo1[0]){
          case 0 :
          journeys = Alamein.slice(lineStopNo2[1],lineStopNo1[1]+1).reverse().join(" -----> ");
          break;
          case 1 :
          journeys = GlenWaverly.slice(lineStopNo2[1],lineStopNo1[1]+1).reverse().join(" -----> ");
          break;
          case 2 :
          journeys = Sandringham.slice(lineStopNo2[1],lineStopNo1[1]+1).reverse().join(" -----> ");
          break;
          }
      }
      console.log("   *You can take the train without transfer,");
      console.log(journeys);
      console.log("   *There are ( " + countStopInSameLine(lineStopNo1,lineStopNo2) +" ) stops total.");

   }else {
      transferLine(lineStopNo1,lineStopNo2);
      // if need to transfer another line, run the transferLine created above.
   }
  }

  function validation(station){
     for(var i= 0; i< allLines.length; i++){
        for(var j=0; j< allLines[i].length; j++){
           if (station === allLines[i][j]){
               return true;
           }
        }
     }
     return false;
  }


function main(origin,destination){
    origin = origin || prompt("Please enter your current station:   ps: Case matters");
    destination = destination || prompt("Please enter your destination:   ps: Case matters");
   while(!validation(origin) || !validation(destination)){
     console.log("Origin or destination you entered may not exist, please try again!!!");
     console.log("Please note the uppercase letters !!!");
     origin = prompt("Please enter your current station:  ps: Case matters");
     destination = prompt("Please enter your destination:  ps: Case matters");
   }
   var lineStopNo1 = searchStopNo(origin);
   var lineStopNo2 = searchStopNo(destination);
   printJourney(lineStopNo1,lineStopNo2);
}
//===========================================================================
main("Hawthorn","East Richmond");
main("Southern Cross","Hawthorn");
main();
