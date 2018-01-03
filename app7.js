/*
Primitive data types
1-String
2-Number
3-Boolean
4-Null
5-Undefined
6-Symbols(ES6)
*/
/*
Reference data types
1-Arrays
2-Object literals
3-Functions
4-Dates
5-Anything else :)
*/

// PRIMITIVE

// String
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

// REFERENCE TYPES - Objects

// Array
const hobbies = ['movies', 'music'];
// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
};
const today = new Date();
console.log(today);
console.log(typeof today);