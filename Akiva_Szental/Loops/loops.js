//Your top choices


var presidents = [
    "Donald Trump",
    "Obama",
    "Hilary"
];

for (var i = 0; i < presidents.length; i++)
{
  console.log(presidents[i]);
}

//The even/odd reporter



for (x = 0; x <= 20; x++) {
  if (x  % 2 === 0) {
      console.log(x + " is even")
  }

  else {
     console.log(x + " is odd")
  }
}

//Multiplication Tables

for (x = 0; x <= 10; x++) {
  for (y = 0; y<= 10; y++) {
  answer = x * y
  console.log(" The answer of " + x + " times " + y + " is " + answer)
}
}

//The Vegan Test

menuChoice = window.prompt("On the menu tonight: Steak, fruit salad, tofurkey, pork chops. What's your choice?")

if (menuChoice === "fruit salad"){
  console.log("This cuisine is vegan friendly")
}
else if (menuChoice === "tofurkey")  {
  console.log("This cuisine is vegan friendly")
}
else
{
  console.log("Vegans beware!")
}
