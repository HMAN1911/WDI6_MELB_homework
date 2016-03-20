/* # Exercises: Objects

## The Recipe Card

Never forget another recipe!

Create an object to hold information on your favorite recipe.
It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

- Mole
- Serves: 2
- Ingredients:
- cinnamon
- cumin
- cocoa
*/

var favRecipe = {
  title : 'Banana Bread',
  servings : 4,
  ingredients : ['bananas','bread','walnuts'],
}

console.log( 'The recipe for ' + favRecipe.title)
console.log( '- Serves: ' + favRecipe.servings)
console.log('- Ingredients:')
for(i = 0; i < favRecipe.ingredients.length; i++) {
  console.log('- ' + favRecipe.ingredients[i])
}




/* The Reading List

Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string),
author (a string), and alreadyRead (a boolean indicating if you read it yet).

Iterate through the array of books. For each book, log the book title and book author like so:
 "The Hobbit by J.R.R. Tolkien".

Now use an if/else statement to change the output depending on whether you read it yet or not.
If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string
like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/

var arrayBooks = [

{
  Title : 'The Hobbit',
  Author : 'JR Tolkien',
  PagesLength : 200,
  readStatus : true
},

{
  Title : 'War and Peace',
  Author : 'Tolstoy',
  PagesLength : 500,
  readStatus : false

},

{
  Title : 'Javascript, The good parts',
  Author : 'Programmer',
  PagesLength : 15,
  readStatus : false

},
]




for ( i = 0; i < arrayBooks.length; i++) {

 console.log('The title of the book is ' + arrayBooks[i].Title + ". It was authored by " + arrayBooks[i].Author)

if (arrayBooks[i].readStatus === true) {
  console.log('You have already read ' + arrayBooks[i].Title)
} else {
  console.log('You have not read ' + arrayBooks[i].Title)
  }
}


/*

## The Movie Database

It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string),
duration (a number), and stars (an array of strings).

Create a function to print out the movie information like so:
"Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

var favMov = {
  title : "E.T. ",
  duration : 130 ,
  stars : [' ET',' Some Chick',' Strange Bloke',' Stupid Guy']
}

movieInfo = function() {
  console.log(favMov.title + 'lasts for ' + favMov.duration + 'minutes. Stars: ' + favMov.stars + '.')
}
