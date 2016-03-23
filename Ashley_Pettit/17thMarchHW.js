
var favouriteRecipe = {
	title: 'Chocolate Cake',
	servings: 3,
	ingredients: ['Flour','Sugar','Egg', 'Chocolate']
};


console.log(favouriteRecipe.title);
console.log("Serves: " + favouriteRecipe.servings);
console.log("Ingredients: \n" +  favouriteRecipe.ingredients.join('\n'));

// # Exercises: Objects

// ## The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), 
// and ingredients (an array of strings).

// On separate lines (one console.log statement for each), log the recipe information so it looks like:

// - Mole
// - Serves: 2
// - Ingredients:
// - cinnamon
// - cumin
// - cocoa



var booksToRead = [
{ title: 'Harry the chocolate man',
	author: 'Mr Bean', 
	alreadyRead: true
	}, 
	{
	title: '1942',
	author: 'Some guy', 
	alreadyRead: false
	}, 
	{
	title: 'How to bake a cheesecake',
	author: 'Mrs CookGood', 
	alreadyRead: false
	}, {
	title: 'James Bond',
	author: 'Mark Uise', 
	alreadyRead: true
	}
];

for(i = 0; i < booksToRead.length; i++){
	if (booksToRead[i].alreadyRead) {
		console.log("You have already read " + booksToRead[i].title + " by " + booksToRead[i].author);
	}
	else {
		console.log("You still need to read " + booksToRead[i].title + " by " + booksToRead[i].author);
	}
}

// ## The Movie Database

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).

// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
 
Movies = {
 	title: 'The Matrix',
 	duration: 183,
 	stars: ['James Bond','Tom Hankins','Eliza Star','Tim Tallend','Nick Jones']
 };


console.log(Movies.title + " lasts for " + Movies.duration + ". Stars:" + Movies.stars);

// 
// 