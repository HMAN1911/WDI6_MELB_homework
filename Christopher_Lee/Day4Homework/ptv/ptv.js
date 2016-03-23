

var alamein = ['Flinders Street','Richmond','East Richmond','Burnley','Hawthorn','Glenferrie'];

var glenwaverly = ['Flagstaff','Melbourne Central','Parliament','Richmond', 'Kooyong','Tooranga'];

var sandringham = ['Southern Cross','Richmond','South Yarra','Prahran','Windsor'];

var trainLines = glenwaverly // change train lines to test

var journeyMap = function(line) {
    var direction = " -----> ";
    var currentLoc = prompt ('Which stop are you at?');
    var originStop  = trainLines.indexOf(currentLoc);

    var theStop = prompt('Where do you want to go?');
    var finalStop = trainLines.indexOf(theStop);

    if (originStop > finalStop) {
        var backwards = trainLines.reverse();
        var journeyBack = trainLines.slice(finalStop - 1,originStop);
        var totalStopsBack = originStop - finalStop;
        var finalJourneyBack = journeyBack.join(direction);
        console.log(finalJourneyBack);
        console.log(totalStopsBack + ' stops ');
    } else {
        var totalStops = finalStop - originStop;
        var journey = trainLines.slice(originStop,finalStop + 1);
        var finalJourney = journey.join(direction);
        console.log(finalJourney);
        console.log(totalStops + ' stops ');
    }
}

journeyMap();
