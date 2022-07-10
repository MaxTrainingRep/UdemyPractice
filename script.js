const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Введите число');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных Вами фильмов', 'Название фильма'),
          b = +prompt('Оцените этот фильм');
    if (a != null && b != null && a !='' && b !='' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else { 
        i--;
    }
};

if (personalMovieDB.count < 10) {
    console.log('litle');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log(' norm');
} else if (personalMovieDB.count > 30) {
    console.log(`too much`)
} else {
    console.log(' errrrroooorrr')
}
        

console.log(personalMovieDB)