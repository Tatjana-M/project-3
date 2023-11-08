'use strict';

const numberOfFilms =+prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMuviesDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false 
};
const a=prompt('Один из последних просмотренных фильмов?', ''),
      b=prompt('На сколько оцените его?',''),
      c=prompt('Один из последних просмотренных фильмов?', ''),
      d=prompt('На сколько оцените его?','');

      personalMuviesDB.movies[a]=b;
      personalMuviesDB.movies[c]=d;
console.log(personalMuviesDB);


