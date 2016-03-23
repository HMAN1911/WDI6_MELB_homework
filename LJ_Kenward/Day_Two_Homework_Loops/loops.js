console.log("BaaaaDBtch");

// MY TOP CHOICES 

var colours = ["blue", "red", "violet", "green", "pink", "yellow", "orange"];
var counter = 0; 
while (counter <= colours.length - 1) {
    var prefix;
    if (counter+1 === 1) {
      prefix = "st";
    }
    else if (counter+1 === 2) {
      prefix = "nd";
    }
    else if (counter+1 === 3) {
      prefix = "rd";
    }
    else if (counter+1 === 4,5,6,7) {
      prefix = "th";
}
    console.log("My " + (counter+1) + prefix + " choice is " + colours[counter]);
    counter++;
    
}


// THE EVEN/ODD REPORTER 

for (counter = 1; counter < 21; counter++) {
    if (counter % 2 === 0) {
      numType = "even";
    }
    else {
      numType = "odd";
    }
    console.log("The number " + counter + " is " + numType);
}

// MULTIPLICATION TABLES 

for (counter = 0; counter < 11; counter++) {
    console.log(counter + " * " + "9 " + "= " + counter * 9);
}

var multi;
multi = "<table border='3' width='300' cellspacing='0' cellpadding='5'>"
for (across = 1; across <= 10; across++) {
multi = multi + "<tr>";
for (down = 1; down <= 10; down++) {
multi = multi + "<td>" + across * down + "</td>";
}
multi = multi + "</tr>";
}
multi = multi + "</table>";
document.write (multi);

// THE VEGAN TEST 

var dinnerOptions = ["Steak", "Fruit Salad", "Tofurkey", "Pork Chops"]
dinnerChoice = prompt("Your choices are Steak, Fruit Salad, Tofurkey, Pork Chops, what would you like for dinner?");

if (dinnerChoice === "Steak" || dinnerChoice === "Pork Chops") {
    console.log("Vegans Beware");
} else {
    console.log("This cuisine in vegan friendly");
}



