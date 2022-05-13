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
