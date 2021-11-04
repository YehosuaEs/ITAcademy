
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  let result = array.map(function(dire) {
    return dire.director
  })
  //let result = array.map(result => result.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  /* let movieDirector = array.filter (function(movie){
    return movie.director == director;
  }) */
  let movieDirector = array.filter((movie) => movie.director == director);
    console.log("EXERCICE 2 ->", movieDirector);
    return movieDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  
  let filteredListOfDirector = getMoviesFromDirector(array, director);
  let mappedScoreDirector = filteredListOfDirector.map(mappedListDirector => mappedListDirector.score);
  let scoretotal = mappedScoreDirector.reduce(function(acumulador, actual){
    return acumulador + actual
  }, 0)
  let average = scoretotal / mappedScoreDirector.length;
  let roundAverage = Math.round(average * 100) / 100;
  console.log("EXERCICE 3 ->", roundAverage);
  return roundAverage;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let moviesTitles = array.map(moviesTitles => moviesTitles.title);
  let moviesInOrder = moviesTitles.sort().slice(0,20);

  console.log("EXERCICE 4 ->", moviesInOrder);
  return moviesInOrder;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  
  let result = array.map(function(movie) {
    return {title: movie.title, year: movie.year}
  })
  let resultAbc = result.sort((movieUno, movieDos) => {
    return (movieUno.title < movieDos.title) ? - 1 : 1
  })
  let resultByYear = resultAbc.sort((movieUno, movieDos) => {
    return movieUno.year  - movieDos.year 
  })

  console.log("EXERCICE 5 ->", resultByYear);
  return resultByYear; 
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let moviesGenre = array.filter((movie) => movie.genre.indexOf(genre) >= 0);
  let ScoreGenrefilter = moviesGenre.filter((number) => number.score != '');
  let mapScoreGenre = ScoreGenrefilter.map(mappedListGenre => mappedListGenre.score);
  let scoretotalGenre = mapScoreGenre.reduce(function(acumulador, actual) {
    return acumulador += actual;
  },0); 
  let average = scoretotalGenre / mapScoreGenre.length;
  let roundAverage = Math.round(average * 100) / 100;
  
  console.log("EXERCICE 6 ->", roundAverage);
  return roundAverage; 
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {


}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

//var directores = getAllDirectors(movies);
//var moviesDirector = getMoviesFromDirector(movies, "Christopher Nolan");
//var scoreDirector = moviesAverageOfDirector(movies, "Christopher Nolan");
//var titleMovies = orderAlphabetically(movies);
//var ordenadoPorAño = orderByYear(movies);
//var averageGenero = moviesAverageByCategory(movies, "Action");