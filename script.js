'use strict';
/* DEFAULT PARAMETERES
 */
// Sometimes it is usefull to set default parameters
// Basic booking function
// Without default parameteres ES 5
// const bookings = [];
// const createBooking = function (flightNum, numPassengers, price) {
//   // Short circuting
//   numPassengers = numPassengers || 1;
//   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
//  New way ES 6
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('');
// // createBooking('LH123', 2, 800);
// // createBooking('LH123', 2);
// // createBooking('LH123', 5);
// // // We cannot skip arguments in the fucntion like below doesnt work
// // createBooking('LH123', 1000);
// // // If we want to skip the argument it is best to set it to undefined see below
// // createBooking('LH123', undefined, 1000);

/* HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE
 */
// const flight = 'LH123';
// const darko = {
//   name: 'Darko ILievski',
//   passport: 12345678,
// };
// // Check in function
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999'; //This doesnt work because the function get's it from above
//   // This passenger.name is the same as darko.name
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 12345678) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// };
// checkIn(flight, darko);
// // console.log(flight);
// // console.log(darko);

// // What can happen real life experience 2 functions using the same object
// // You need to be carefull in real life
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random()) * 100000000000;
// };
// newPassport(darko);
// checkIn(flight, darko);
// Passing by value and Passing by reference (passing by refence doesnt work in JS)
// It only has passing by value !!!

/* 

FIRST CLASS FUNCTIONS AND HIGHER ORDER FUNCTIONS (UDEMY LECTURE WITHOUT PRACTICE)


*/

/* 

FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

*/
// Function to transfrom strings into one word
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// // Function to transfrom the frist word of a string to CAPS
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher order function
// const transfomer = function (str, votraFunkcija) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${votraFunkcija(str)}`);
//   console.log(`Transformed by: ${votraFunkcija.name}`);
// };
// transfomer('Javascript is the best', upperFirstWord);
// transfomer('Javascript is the best', oneWord);

// Javascript uses callbacks all the time
// const high5 = function () {
//   console.log('Hi');
// };
// document.body.addEventListener('click', high5);

// // Example
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

/* 

FUNCTIONS RETURNING FUNCTIONS

*/

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// Using arrow functions - but more confusing to me
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

/* 

THE CALL AND APPLY METHODS

*/

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Darko Ilievski');
// lufthansa.book(345, 'Tanja Budjakovska Ilievska');
// console.log(lufthansa);

// const euroWings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'SW',
//   bookings: [],
// };

// const book = lufthansa.book;
// // Below doesn't work because of the this. keyword used in the method function above
// // book(23, 'Brooklyn Ilievska');

// // Call method - wnatever we pass as the first argument replaces the this. keyword
// book.call(euroWings, 23, 'Brooklyn Ilievska');
// book.call(lufthansa, 55, 'Ana Ilievska');
// console.log(euroWings);
// console.log(lufthansa);

// // Apply method - it takes an array (not that used in modern JS)
// const flightData = [583, 'George Cooper'];
// book.apply(euroWings, flightData);
// // This is the same as the apply method with the ...operator
// book.call(euroWings, ...flightData);

// // THE BIND METHOD - manually set the this keyboard

// const bookEW = book.bind(euroWings);
// const bookLH = book.bind(lufthansa);
// const bookSW = book.bind(swiss);
// bookEW(23, 'Kalina Gjurevska');
// bookLH(23, 'Kalina Gjurevska');
// bookSW(23, 'Kalina Gjurevska');

// // We can pass more agruments which will be stored and saved
// const bookEW23 = book.bind(euroWings, 23);
// bookEW23('Darko Ilievski');
// bookEW23('Tanjaaaa');

// // Example with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partail application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// // We add null because the this keyboard doesnt exist in the function above
// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addVAT(23));

/* 

CODING CHALLENGE #01

*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   // #1.1
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(`${this.question}
//   ${this.options[0]}
//   ${this.options[1]}
//   ${this.options[2]}
//   ${this.options[3]}
//   (Write option number)
//   `)
//     );
//     // #1.2
//     if (typeof answer === 'number' && answer < this.answers.length) {
//       this.answers[answer]++;
//     }
//     // #4
//     this.displayResults();
//     this.displayResults('string');
//   },
//   // #3
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are: ${this.answers.join(', ')}`);
//     }
//   },
// };

// // poll.registerNewAnswer();
// // #2
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // BONUS
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// /*

// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

// */
// // Mostly used in ASYNC/AWAIT
// (function () {
//   console.log('This will never run again');
// })();
// // Same with arrow function
// (() => console.log('This will ALSO never run again'))();
/* 

CLOSURES

*/

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// // Me trying to attach it to a button and it worked
// // document.querySelector('.poll').addEventListener('click', booker);
// booker();
// booker();
// booker();
// console.dir(booker);

// More closure examples
// Example 1
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // Reassining the f variable again
// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// h();
// f();
// console.dir(f);
// // Example 2 - timer

// const boardPassengers = function (number, wait) {
//   const perGroup = number / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${number} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 10000;
// boardPassengers(180, 3);

/* 

CHALLENGE #02

*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  let changeColor = function () {
    header.style.color = 'blue';
  };
  document.body.addEventListener('click', changeColor);
})();
