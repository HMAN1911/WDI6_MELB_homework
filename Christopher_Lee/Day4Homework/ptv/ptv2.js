
var alamein = ['Flinders Street','Richmond','East Richmond','Burnley','Hawthorn','Glenferrie'];

var glenwaverly = ['Flagstaff','Melbourne Central','Parliament','Richmond','Kooyong','Tooranga'];

var sandringham = ['Southern Cross','Richmond','South Yarra','Prahran','Windsor'];

var trainLines = [alamein,glenwaverly,sandringham];
var directionArrows = " ----> "
//from input get trainline
var getOriginStop = prompt('Which stop are you at now?');
var getDestinationStop = prompt('Where would you like to go?');

var getTrainLines = function (stops) {
  for (var i = 0; i < trainLines.length; i++) {
    for (var j = 0; j < trainLines[i].length ; j++){
      var getStop = stops;

      if (getStop === trainLines[0][j]) {
        var trainService = alamein;
        var indexStop = trainService.indexOf(getStop);

      } else if (getStop === trainLines[1][j]) {
        var trainService = glenwaverly;
        var indexStop = trainService.indexOf(getStop);

      } else if (getStop === trainLines[2][j]) {
        var trainService = sandringham;
        var indexStop = trainService.indexOf(getStop);
      }
    }
  }
  return trainService;
}

//get index of start and origin
var getStartIndex = getTrainLines(getOriginStop).indexOf(getOriginStop);
var getFinalIndex = getTrainLines(getDestinationStop).indexOf(getDestinationStop);

//get variable of stops
var trainServiceOrigin = getTrainLines(getOriginStop);
var trainServiceStop = getTrainLines(getDestinationStop);

var testSameStop = function (putTrain) {
  if (getOriginStop === getDestinationStop) {
    console.log('You are at the same stop, please choose again');
  }
}

testSameStop(trainServiceStop);

// to see if they are on the same service
var runJourney = function (theService) {
  if (trainServiceOrigin === trainServiceStop) {
    if (getStartIndex > getFinalIndex) {
        var reversal = trainServiceOrigin.reverse();
        var getReverseIndexStart = reversal.indexOf(getOriginStop);
        console.log(getReverseIndexStart);
        var getReverseIndexLast = reversal.indexOf(getDestinationStop);
        console.log(getReverseIndexLast)
        var sliceJourneySame = reversal.slice(getReverseIndexStart, getReverseIndexLast + 1);
        console.log(sliceJourneySame);
        var totalStopsBack = getStartIndex - getFinalIndex;
        var journeySameLine = sliceJourneySame.join(directionArrows);
        console.log(journeySameLine);
        console.log(totalStopsBack + ' stops ');
    } else {
        var totalStops = getFinalIndex - getStartIndex;
        var journeyToSame = trainServiceOrigin.slice(getStartIndex,getFinalIndex + 1);
        var journeyToSame = journeyToSame.join(directionArrows);
        console.log(journeyToSame);
        console.log(totalStops + ' stops ');
    }
    //   if (getStartIndex > getFinalIndex) {
    //   var reversal = trainServiceOrigin.reverse();
    //   var newIndex = trainServiceOrigin.indexOf(getOriginStop);
    //   var sliceJourney = trainServiceOrigin.slice(newIndex,getFinalIndex-1);
    //   console.log(sliceJourney.join(directionArrows));
    // } else {
    //   var sliceJourney = trainServiceOrigin.slice(getStartIndex,getFinalIndex + 1);
    //   console.log(sliceJourney.join(directionArrows));
    } else {

      var PTV = function () {
        var getToRichmond = function (trains) {
          var trainToRichmond = trains;

          if (trainToRichmond === alamein) {
            var richmondStopAlamein = 1;

              if (getStartIndex > 1) {
                var backwardsAla = alamein.reverse();
                var newIndexAla = alamein.indexOf(getOriginStop);
                var totalStops = getStartIndex - 1;
                console.log(totalStops);
                var sliceUp = backwardsAla.slice(newIndexAla,5);
                  firstLegResults = sliceUp;

              } else {
                var totalStops = 1 - getStartIndex;
                console.log(totalStops);
                var sliceUp = alamein.slice(getStartIndex,richmondStopAlamein + 1);
                  firstLegResults = sliceUp;
            }
          } else if (trainToRichmond === glenwaverly) {
            var richmondStopGlen = 3;
              if (getStartIndex > 3) {
                var backwardsGlen = glenwaverly.reverse();
                var newIndexGlen = glenwaverly.indexOf(getOriginStop);
                var totalStops = getStartIndex - 3;
                console.log(totalStops);
                var sliceUp = backwardsGlen.slice(newIndexGlen,3);
                firstLegResults = sliceUp;

              } else {
                var totalStops = 3 - getStartIndex;
                console.log(totalStops);
                var sliceUp = glenwaverly.slice(getStartIndex,richmondStopGlen + 1);
                firstLegResults = sliceUp;
            }
          } else {
            var richmondStopSandy = 1;

              if (getStartIndex > 1) {
                var backwardsSandy = sandringham.reverse();
                var newIndexSandy = sandringham.indexOf(getOriginStop);
                var totalStops = getStartIndex - 1;
                console.log(totalStops);
                var sliceUp = backwardsSandy.slice(newIndexSandy,4);
                firstLegResults = sliceUp;
              } else {
                var totalStops = 1 - getStartIndex;
                console.log(totalStops);
                var sliceUp = sandringham.slice(getStartIndex,richmondStopSandy + 1);
                firstLegResults = sliceUp;
            }
          }
            console.log(sliceUp);
            finalFirstResults = {firstLegResults,totalStops};
            return finalFirstResults;
        }

        var richmondToFinal = function (firstLeg) {
          var richmondFinal = firstLeg;

          if (richmondFinal === alamein) {
            var richmondStopAlamein = 1;

              if (getFinalIndex > 1) {
                var backwardsAlaTo = alamein.reverse();
                var newIndexAlaTo = alamein.indexOf(getDestinationStop);
                var totalStopsBack = getFinalIndex - 1;
                console.log(totalStopsBack);
                var slicey = backwardsAlaTo.slice(newIndexAlaTo,4);
                secondLegResults = slicey;

              } else {
                var totalStopsBack = 1 - getFinalIndex;
                console.log(totalStopsBack);
                var slicey = alamein.slice(getFinalIndex,richmondStopAlamein);
                secondLegResults = slicey;
            }
          } else if (richmondFinal === glenwaverly) {
            var richmondStopGlen = 3;

              if (getFinalIndex > 3) {
                var backwardsGlenTo = glenwaverly.reverse();
                var newIndexGlenTo = glenwaverly.indexOf(getDestinationStop);
                var totalStopsBack = getFinalIndex - 3;
                console.log(totalStopsBack);
                var slicey = backwardsGlenTo.slice(newIndexGlenTo,2);
                secondLegResults = slicey;

              } else {
                var totalStopsBack = 3 - getFinalIndex;
                console.log(totalStopsBack);
                var slicey = glenwaverly.slice(getFinalIndex,richmondStopGlen);
                secondLegResults = slicey;
            }
          } else {
            var richmondStopSandy = 1;

              if (getFinalIndex > 1) {
                var backwardsSandyTo = sandringham.reverse();
                var newIndexSandyTo = sandringham.indexOf(getDestinationStop);
                var totalStopsBack = getFinalIndex - 1;
                console.log(totalStopsBack);
                var slicey = backwardsSandyTo.slice(newIndexSandyTo,3);
                secondLegResults = slicey;

              } else {
                var totalStopsBack = 1 - getFinalIndex;
                console.log(totalStopsBack);
                var slicey = sandringham.slice(getFinalIndex,richmondStopSandy);
                secondLegResults = slicey;
            }
          }
          finalBackResults = {secondLegResults,totalStopsBack};
          return finalBackResults;
        }
      // run functions
      getToRichmond(trainServiceOrigin);
      richmondToFinal(trainServiceStop);


      var firstCount = finalFirstResults.totalStops;
      var backCount = finalBackResults.totalStopsBack;
      var totalStopCounts = firstCount + backCount;

      var firstLegFinal = firstLegResults;
      var reverseFinal = secondLegResults.reverse();
      console.log(reverseFinal);

      Array.prototype.push.apply(firstLegFinal,reverseFinal);

      var finalDisplay = firstLegFinal.join(directionArrows);
      console.log(finalDisplay);
      console.log(totalStopCounts + ' stops ');
      }

      PTV();
    }

  }

runJourney(trainServiceOrigin);
