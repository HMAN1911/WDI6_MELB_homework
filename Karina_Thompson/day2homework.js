var favouriteFoods = ["ice cream","chocolate","salad","pizza","lasagna"]

for (var i = 0; i < favouriteFoods.length; i++) {
console.log("My number " + (i+1) + " choice is " + favouriteFoods[i])
}


for (var i = 1; i <= 20; i++) {
	if (i % 2 === 0) {
		console.log(i + " is even")
	}
	else {
		console.log(i + " is odd")
	}
}

for (var i = 0; i <= 10; i++) {
	console.log(i + " * 9 = " + (i*9))
}


var menuChoice = prompt("On the menu tonight: steak, fruit salad, tofurkey and pork chomps. What is your choice?");
console.log(menuChoice);
if (menuChoice == "tofurkey" || menuChoice == "fruit salad") {
	console.log("This cuisine is vegan friendly");
} else if (menuChoice == "steak" || menuChoice == "pork chops") {
	console.log("Vegans beware");
} else {
	console.log("That is not on the menu")
}
