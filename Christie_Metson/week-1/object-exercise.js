// 1. Favourite Recipe

var favouriteRecipe = {
  'name' : 'mole',
  'servings' : 2,
  'ingredients' : ['cinnamon', 'cumin', 'cocoa'],
}

console.log(favouriteRecipe.name);
// console.log('it serves: ' + favouriteRecipe.servings);
console.log('the ingredients are: ' + favouriteRecipe.ingredients);

// 2. The Reading List

var bookObjectArray = [
      {
        'title' : 'harry potter',
        'author' : 'j k rowling',
        'readStatus' : true,
      },
      {
        'title' : 'game of thrones',
        'author' : 'george h martin',
        'readStatus' : true,
      },
     {
        'title' : 'pride and prejudice',
        'author' : 'jane austin',
        'readStatus' : false,
      },
];

for (i = 0; i < bookObjectArray.length; i ++) {
  console.log('Book title is: ' + bookObjectArray[i].title + ', by: ' + bookObjectArray[i].author);

  if (bookObjectArray[i].readStatus === true) {
    console.log('you have already read this!');
  }
  else {
    console.log('you still need to read this');
  }
}

// 3. The Movie Database

var faveMovieEvur = {
    'name' : 'cool runnings',
    'duration' : 55,
    'stars' : ['john candy', 'sanka', 'strict jamaican dad', 'hot wifey'],
    'quote' : 'Sanka, you dead yet? Yeah mon',
}

function poorMansIMDB() {
  console.log(faveMovieEvur.name + ' runs for ' + faveMovieEvur.duration + ' minutes, and stars: ' + faveMovieEvur.stars + '.');
  console.log('My favourite quote is: ' + faveMovieEvur.quote);
}

poorMansIMDB();
