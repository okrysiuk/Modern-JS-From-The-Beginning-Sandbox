// Strings
const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello my name is Brad';
const tags = 'web development, programming, web design';


let val;

val = firstName + lastName;

// Concatenation

val = firstName + ' ' + lastName;

//Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello? my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'Thath\'s awesome';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// Index of
val = firstName.indexOf('i');
val = firstName.lastIndexOf('i'); // ?

val = firstName.charAt(5);

// Get last character
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);   // Last three symbols

// split()
val = str.split(' ');
val = tags.split(',');

// relace()
val = str.replace('Brad', 'Jack');

// includes()
val = str.includes('Hello');
val = str.includes('Hi');


console.log(val);
