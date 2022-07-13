let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Введите число');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Введите число');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных Вами фильмов', 'Название фильма'),
          b = +prompt('Оцените этот фильм');
     if (a != null && b != null && a !='' && b !='' && a.length < 50) {
        personalMovieDB.movies[a] = b;
     } else { 
        i--;
        }
    }  
}
rememberMyFilms();

function detectPersonalLevel() {
 if (personalMovieDB.count < 10) {
        console.log('litle');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log(' norm');
    } else if (personalMovieDB.count > 30) {
        console.log(`too much`);
    } else {
        console.log(' errrrroooorrr');
    }   
}
detectPersonalLevel();
        
function showMyDB(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre's number is ${i}`);
    }
}
writeYourGenres();