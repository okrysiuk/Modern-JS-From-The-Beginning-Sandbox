let val;

// Number to string

val = String(555);
val = String(4+4);
// Boolean to a string
val = String(true);
// Date to a string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);
// toString
val = (5).toString();
val = (true).toString(); // Use this or previous

// String to number
//val = '5';
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Hello');
val = Number([1,2,3]);

val = parseInt('100.31');
val = parseFloat('100.31');
/*
// Output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2));
*/
const val1 = String('5');
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

const val3 = String('5');
const val4 = 6;
const sum2 = Number(val3 + val4);

console.log(sum2);
console.log(typeof sum2);