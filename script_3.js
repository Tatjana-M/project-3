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

// function leanJS(lang, callback) {
//     console.log(`I learn ${lang}`);
//     callback();
// }

// function done() {
//     console.log('I completed this task');
// }

// leanJS('JS', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     heigth: 1024,
//     color: {
//         border: 'black',
//         bg: 'red'
//     },

//     makeTest: function () {
//         console.log('Test');
//     }
// };
// options.makeTest();

// const { border, bg } = options.color;
// console.log(border);

// console.log(Object.keys(options).length);


// console.log(options.name);

// delete options.name;

// console.log(options); 

// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Property ${i} has value ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Property ${key} has value ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// const arr = [1, 52, 13, 5, 78, 11];
// arr.sort(compareNumm);
// console.log(arr);

// function compareNumm(a, b) {
//     return a - b;
// }

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item}, incide messive ${arr} `);
// })

// arr.pop();
// arr.push(10);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));



// let a = 5;
// b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Ссылка
// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};


//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 25
// };

// console.log(Object.assign(numbers, add));

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogers'],
//     internet = [...video, ...blogs, 'facebook', 'insta'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function () {

//         return `Мне ${this.age} и я владею языками: ${this.skills.languages.join(' ').toUpperCase()}`;


//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);


// function showExperience(plan) {
//     let {exp} = plan.skills;
//     return exp;
// }


// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     let { programmingLangs } = plan.skills;

//     const arrayLang = [];

//     for (let key in programmingLangs) {
//         arrayLang.push(`Язык ${key} изучен на ${programmingLangs[key]}\n`)
//         // objCopy[key] = programmingLangs[key];
//     }

//     return arrayLang.join('');

// }
// showProgrammingLangs(personalPlanPeter);

