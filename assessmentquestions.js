/**
 * In this scenario you will be working with a single data set.
 * The Data set is an array of objects stored in a variable called films.
 * if you look at films.js you can see the array.
 * Each object in the array is a film that has a name and year of release. 
 * 
 * films is a global variable that you will have access to 
 * inside your functions it does not have to be passed as an argument
 * if your functions are written to pass in the array films 
 * ensure that it is the last argument
 * 
 * Many of the questions will require you to finish the functions 
 * that are prewritten,
 * Add arguments when needed
 * You will not need to invoke any of the functions yourself
 * The Unit Tests should let you know when you got the function right
 * 
 * For Question 7 you will need to move everything over to 
 * VSCode and build your angular app there.
 * When you complete the app push it to your github and slack me with the url.
 * 
*/

//Question 1 - Finish the function called filmCount so it will return the total number of films in the array
function filmCount(x){
  var total = 0;
   for(var key in x){
     if(x.hasOwnProperty(key)){
     total = total + 1}
   }
   return total;
}

//Question 2 - Find film by Title 
function findTitle(name){
  for(var i = 0; i < films.length; i++){
    if(films[i].name === name){
      return films[i]
    }
  }
  
}

//Question 3 - Add each of the movies in the newFilms array to the films array
var newFilms = [{
  name: 'Tangled',
  year: 2010
},{
  name: 'Aladdin',
  year: 1992
},{
  name: 'Zootopia',
  year: 2016
},{
  name: 'The Little Mermaid',
  year: 1989
},{
  name: 'Beauty and the Beast',
  year: 1991
}];
for(var i = 0; i < newFilms.length; i++){
  films.push(newFilms[i]);
}
//Question 4 - Remove any duplicate titles found in the films array by name

function removeDups(prop, value, arr){
    for(var i = 0; i < films.length; i++){
        for (var j = i + 1; j < films.length; j++)
        if(films[i].name === films[j].name){
          films.splice(j,1);
          j--;
        }
    }
  return films[i];
}

//Question 5 - Find All films within a starting year and ending year
function findReleasesWithin(start,end, arr){
  var hasProp = [];
  for(var i = 0; i < arr.length; i++){
    if(films[i].year >= start && films[i].year <= end){
      hasProp.push(i)
    }
  }
  return hasProp
}

//BONUS QUESTION - Arrange the films array from oldest to newest 
function sortByYear(){films.sort(function(a, b) {
    return parseFloat(a.year) - parseFloat(b.year);
});
 
}

//Question 7 - Using the films array build an angular app
//that will let you manage adding and removing films with a view




