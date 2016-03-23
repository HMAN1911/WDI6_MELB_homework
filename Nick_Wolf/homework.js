var colors = ['blue', 'yellow', 'red'];

for (i = 0; i < colors.length; i++) {
	num = 0;
  console.log("My number " + (i+1) + " favourite colour is " + colors[i]);
    num ++;
}
console.log('Next');

var round = 1;
var multiple = 10;

while (round < multiple+1){
    console.log(round + ' times 9 = ' + (round * 9));
    round++;
}


console.log('Next');

var menu = ['Steak', 'fruit salad', 'tofurkey', 'pork chops'];

for (i = 0; i < menu.length; i++) {
    if (menu[i] === 'Steak' || menu[i] === 'pork chops')
    	console.log('Beware! ' + menu[i] + ' is not vegen friendly.');
    else 
    	console.log('Yay! ' + menu[i] + ' is vegan friendly' );

}

var num = 20

for (i = 0; i < num; i++){
    if (i%2)
	    console.log(i + ' is odd');
	else
		console.log(i + ' is even');
}



