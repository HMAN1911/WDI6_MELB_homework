//your top choice

var colors =["blue","white","orange"];
for (var index = 1; index <= colors.length; index++){
  console.log("My #" + index + " colors choice is "+ colors[index-1]);
}

// DT
var suffix =['st','nd','rd','th'];

funtion getSuffix(index){

  return suffix;
}

//the even/odd reporter 0~20

for (var num = 0; num <= 20; num++){
     if (num%2 === 0){
       console.log(num +' is even !');
     }else{
       console.log(num +' is odd !');
     }
}

//Multiplication Tables

for (var b = 1; b < 10; b++){
    for (var a= 1; a < 10; a++){
        console.log(a +" * "+ b +" = "+ a*b );
    }
}
//The Vegan Test
var choose = prompt("Them menu tonight is Steak, fruit salad, tofurkey, pork chops").toUpperCase();
if (choose === "STEAK" || choose === "PORK CHOPS"){
  console.log("Vegans beware!");
}else if (choose === "FRUIT" || choose === "TOFURKEY"){
  console.log("This cuisine is vegan friendly!");
}else {
  console.log("please choose one disk of menu !!");
}
// DT
var menu = ['steak','pork chops', 'fruit salad', 'tofurkey'];
