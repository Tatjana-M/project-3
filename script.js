'use strict';

// const numberOfFilms =+prompt('Сколько фильмов вы уже посмотрели?', '');
// const personalMuviesDB ={
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privet: false 
// };
// const a=prompt('Один из последних просмотренных фильмов?', ''),
//       b=prompt('На сколько оцените его?',''),
//       c=prompt('Один из последних просмотренных фильмов?', ''),
//       d=prompt('На сколько оцените его?','');

//       personalMuviesDB.movies[a]=b;
//       personalMuviesDB.movies[c]=d;

// for (let i=0; i<2; i++) {
//     const   a=prompt('Один из последних просмотренных фильмов?', ''),
//             b=prompt('На сколько оцените его?','');
//     if (a !=null && b !=null && a !='' && b !='' && a.length < 50) {
//             personalMuviesDB.movies[a]=b;
//             console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }       
// }

// if (personalMuviesDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if(personalMuviesDB.count <= 10 && personalMuviesDB.count < 30){
//     console.log("Вы классический зритель");
// } else if(personalMuviesDB.count >=30){
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMuviesDB);


// function showFirstMessage() {
//     console.log('HI! How are you?');
// }
// showFirstMessage();

// function calc (a, b){
// return (a + b);
// }

// console.log(calc(4, 2));
// console.log(calc(6, 2));
// console.log(calc(8, 2));

// function convert(amount) {
//     console.log(28*amount);
// }

// convert(500);

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// promotion(convert(500, usdCurr));

// function test() {
//     for (let i=0; i<5; i++){
//         console.log(i);
//         if (i===3) return;
//     }
// console.log('Done');
// } 
// test();

// const name = 'Антон';
// const say = 'Привет'

// function sayHello(say, name) {
// return ('say, name!')
// }

// function sayHello(name) {
//     return `Привет, ${name}!`;
// }

// sayHello('Alex');

// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// returnNeighboringNumbers(5);

// const str = "teSt"

// console.log(str.toleLowerCase());
// console.log(str);

// const fruet = "Some fruet"
// console.log(fruet.indexOf('fruet'));

// const logg = 'Yep! I am ok'
// console.log(logg.sub(5));

// const num = 12.2
// console.log(Math.round(num));


// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }

// }

// start();


// const personalMuviesDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privet: false
// };
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMuviesDB.movies[a] = b;
// personalMuviesDB.movies[c] = d;


// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMuviesDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }

// }

// rememberMyFilms();

// function detectPersonalLevel() {

//     if (personalMuviesDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMuviesDB.count <= 10 && personalMuviesDB.count < 30) {
//         console.log('Вы классический зритель!');
//     } else if (personalMuviesDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMuviesDB);
//     }
// }

// showMyDB(personalMuviesDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMuviesDB.genres[i - 1] = genre;
//     }
// }
// writeYourGenres();

// function calculateVolumeAndArea(edgeLength) {
//     if (Number.isInteger(edgeLength) && Math.sign(edgeLength) > 0) {
//         let area, volume = 0;

//         area = (edgeLength * edgeLength * 6);

//         volume = (edgeLength * edgeLength * edgeLength);

//         return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
//     } else {
//         return 'При вычислении произошла ошибка';
//     }
// }
// console.log(calculateVolumeAndArea(5));



// function getCoupeNumber(seatNumber) {
//     if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return 'Таких мест в вагоне не существует';
//     }

//     return Math.ceil(seatNumber / 4);
//     // тут очень много вариантов решения, но выбрал один из элегантных :)
// }

// console.log(getCoupeNumber(33));

// function getTimeFromMinutes(minutesTotal) {
//     if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "Ошибка, проверьте данные";
//     }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0:
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// getTimeFromMinutes(180)

function leanJS(lang, callback) {
    console.log(`I learn ${lang}`);
    callback();
}

function done() {
    console.log('I completed this task');
}

leanJS('JS', done);