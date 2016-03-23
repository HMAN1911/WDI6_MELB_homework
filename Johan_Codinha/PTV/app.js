var alamein = ["Alamein", "Ashburton", "Burwood", "Hartwell", "Willison", "Riversdale", "Camberwell", "Auburn", "Glenferrie", "Hawthorn", "Burnley", "East Richmond", "Richmond", "Parliament", "Melbourne Central", "Flagstaff", "Southern Cross", "Flinders Street"];
var glenWaverley = ["Glen Waverley", "Syndal", "Mount Waverley", "Jordanville", "Holmesglen", "East Malvern", "Darling", "Glen Iris", "Gardiner", "Tooronga", "Kooyong", "Heyington", "Burnley", "East Richmond", "Richmond", "Flinders Street", "Southern Cross", "Flagstaff", "Melbourne Central", "Parliament"];
var sandringham = ["Sandringham", "Hampton", "Brighton Beach", "Middle Brighton", "North Brighton", "Gardenvale", "Elsternwick", "Ripponlea", "Balaclava", "Windsor", "Prahran", "South Yarra", "Richmond", "Flinders Street", "Southern Cross", "Flagstaff", "Melbourne Central", "Parliament"];
var hurstbridge = ["Hurstbridge", "Wattle Glen", "Diamond Creek", "Eltham", "Montmorency", "Greensborough", "Watsonia", "Macleod", "Rosanna", "Heidelberg", "Eaglemont", "Ivanhoe", "Darebin", "Alphington", "Fairfield", "Dennis", "Westgarth", "Clifton Hill", "Victoria Park", "Collingwood", "North Richmond", "West Richmond", "Jolimont", "Parliament", "Melbourne Central", "Flagstaff", "Southern Cross", "Flinders Street"];
var network = [alamein, glenWaverley, sandringham, hurstbridge];

var origin = "Parliament";
var destination = "Dennis";

//return array of lines passing trough station, return false if not fund
var linesAtStation = function(station){
	var lines = new Array();

	for(var i = 0; i < network.length; i++){
		if (network[i].indexOf(station) !== -1){
			//console.log(network[i][0]);
			lines.push(network[i][0]);
		}
	}

	if (lines.length > 0){
		return lines;
	}else {
	 return false;
	}
}

// Stations sharing lines ? return all lines if yes, return false if not
var sameLine = function(origin, destination){	

	var originLines = linesAtStation(origin);
	var destinationLines = linesAtStation(destination);
	var sharedLines = new Array();

	for(var i = 0 ; i < originLines.length; i++){
		if (destinationLines.indexOf(originLines[i]) !== -1){
			//console.log(originLines[i]);
			sharedLines.push(originLines[i]);
		}
	}
	if (sharedLines.length > 0){
		return sharedLines;
	}else {
	 return false;
	}
} 

//console.log(linesAtStation("Parliament"));
console.log(sameLine(origin, destination));