=============================== HOMEWORK =================================
//PART ONE

var choice = ["blue","green","red","purple","yellow","orange"]



for (var i = 0; i < choice.length; i++) {
    console.log('My #' + (i + 1) + " choice is " + choice[i])
}


//BONUS POINT
for (var i = 0; i < choice.length; i++){

    if(i === 0) {
    console.log('My ' + (i + 1) + "st choice is " + choice[i])
        }
    else if (i === 1) {
    console.log('My ' + (i + 1) + 'nd choice is ' + choice[i])
        }
    else if (i === 2){
    console.log('My ' + (i + 1) + 'rd choice is ' + choice[i])
        }
    else { console.log('My ' + (i + 1) + 'th choice is ' + choice[i])
    }
}



////part 2 ODD EVEN REPORT

for (var i = 0; i <= 20; i++) {

    if ( i % 2 === 0 ){
         console.log([i] + " is an even number")

    }else {
        console.log([i]+ " is an odd number")
    }
}


//PART THREE


for (var i = 0; i <= 10; i++ ) {
console.log([i] +" x 9 = " + i * 9)
}

//BONUS POINT

for (var i = 0; i <= 10; i++ ) {

    for (var z = 0; z <= 10; z++ ){

    console.log(i + ' x ' + z + ' = ' + (i * z) );
    }
}


//part 3 vegan or carnivourous


var dinersRequest = prompt("What do ya fancy?")
if(dinersRequest === ("steak"||"pork chop")) {
    alert("Vegans beware!")
    } else if (dinersRequest === ("fruit" || "tofurkey")) {
        alert("This cuisine is vegan friendly!");
    }
    else { alert("Sorry, please choose again, this is not on our menu")
    }
