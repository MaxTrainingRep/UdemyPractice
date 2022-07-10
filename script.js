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
        

console.log(personalMovieDB)