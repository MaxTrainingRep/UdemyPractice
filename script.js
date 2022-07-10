const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Введите число');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных Вами фильмов', 'Название фильма');
   
    for (let j = 0; j < 1; j++){
        const b = +prompt('Оцените этот фильм')
        personalMovieDB.movies[a] = b;
    };
}
        

console.log(personalMovieDB)