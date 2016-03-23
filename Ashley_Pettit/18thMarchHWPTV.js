function initialize(){
	var destination	= prompt("Where are you travelling to?");
	var origin = prompt("Where are you right now?");

  if (isinputvalid(destination,origin)) {
	  var routeOn = whichRouteOn(origin);
		var routeOfDestination = whichRouteOn(destination);
		var stopsToRichmond = stopsRequired(routeOn, origin);
		var stopsFromRichmond = stopsRequired(routeOfDestination, destination);
		if (routeOn === routeOfDestination) {
			console.log("Good news you can take the " + routeOn +  " direct to " + destination + " It's just " + (stopsToRichmond + stopsFromRichmond) + " stop(s) away.");
		}
		else {
			console.log("There's one change required to get to " + destination + " from " + origin + ".");
			console.log("You need to take the " + routeOn + " and then change at Richmond. Richmond is " + stopsToRichmond + " stop(s) away.");
			console.log("Once at Richmond you need to take the " + routeOfDestination + " towards " + destination + " for " + stopsFromRichmond + " stop(s) and you will arive at " + destination + ".");
	  } 
	}
	else {
		alert("I didn't understand your input. Lets try again");
		initialize();
	}
}

function isinputvalid(destination, origin) {
	if (destination === origin) {
		alert("Do you really want to travel to where you presently are?");
		return false;
	}
	else if (allStations.indexOf(destination) !== -1 && allStations.indexOf(origin) !== -1) {
		// Both  the origin and destination should be in allStations. 
		return true;
	}
	else {
		return false;
	}
}

function whichRouteOn (station){
	if (stationsAlamein.indexOf(station) !== -1) { 
		//We Know the person is on alamein line (if called by origin) or they need to go there (if called by destination)
		return "Alamein Line";
	}
	else if (stationsGlenWaverly.indexOf(station) !== -1) {
		//We Know the person is on Glen Waverly line or they need to go there
		return "Glen Waverly Line";
	}
	else if (stationsSandringham.indexOf(station) !== -1) {
		//We Know the person is on Sandringham line or they need to go there
		return "Sandringham Line";
	}
}

function stopsRequired (route, station) { 
	// This function works out either the stops from origin to Richmond or the stops from Richmond to destination. 
	if (route === "Alamein Line") {
		return (Math.abs(1 - stationsAlamein.indexOf(station)));
	}
	else if (route === "Glen Waverly Line") {
		return (Math.abs(3 - stationsGlenWaverly.indexOf(station)));
	}
	else if (route === "Sandringham Line") {
		return (Math.abs(1 - stationsSandringham.indexOf(station)));
	}
}


stationsAlamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
stationsGlenWaverly = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
stationsSandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];
allStations = stationsAlamein.concat(stationsGlenWaverly).concat(stationsSandringham); //Used to check if entered stations are valid

initialize();

// Tests entering gibberish
// Tests traveling from Richmond to Richmond
// Tests traveling from Flinders Street to Hawthorn
// Tests traveling from Flinders Street to Windsor