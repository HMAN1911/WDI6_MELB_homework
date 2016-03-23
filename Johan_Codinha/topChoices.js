var topChoices=[3.14159265359, 3, 8, 2, 1, 0, 5, 7, 6, 4];
var prefix;

for(var i = 0; i<topChoices.length; i++) {
	switch (i+1) {
		case 1:
		prefix = "st ";
		break;

		case 2:
		prefix = "nd ";
		break;

		case 3:
		prefix = "rd ";
		break;

		default:
		prefix = "th ";
		break;
	}
	console.log("My " + (i+1) + prefix + "choice is the number : " + topChoices[i])
}