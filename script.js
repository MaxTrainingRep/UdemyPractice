const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Введите число');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const   a = prompt('Один из последних просмотренных Вами фильмов', 'Название фильма'),
        b = prompt('Оцените этот фильм'),
        c = prompt('Один из последних просмотренных Вами фильмов', 'Название фильма'),
        d = prompt('Оцените этот фильм');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)