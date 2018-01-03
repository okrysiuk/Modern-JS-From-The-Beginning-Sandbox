
const id = 100;
/*
//Equal to

if (id == 100){
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

//Not equal to

if(id != 101){
  console.log('Correct!!');
} else {
  console.log('Incorrect!!');
}

// Equal to value and type

if (id === 100){
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

// Equal to value and type

if (id !== 100){
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}
*/
// Test if undefined
/*
if (typeof id !== 'undefined') {
  console.log('The ID is ${id}');
} else {
  console.log('No ID');
}
*/
// Greater or less 

/*
if (id >= 100){
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}
*/
//If Else
const color ='white';
/*
if (color === 'red') {
  console.log('Color is red!');
} else if (color === 'blue') {
  console.log('Color is blue!');
} else {
  console.log('Color is not red or blue!');
}
*/
//Logical operators
const name = 'Steve';
const age = 25;

// And && Логическое И 
if(age >0 && age <12) {
  console.log(name + ' is a child!');
} else if(age >= 13 && age <= 19){
  console.log(name + ' is a teenager!');
} else {
  console.log(name + ' is an adult!');
}

//OR Логическое ИЛИ

if(age < 4 || age > 65) {
  console.log(name + ' can not run in this race!');
} else {
  console.log(name + ' can run!');
}


//Ternary operator

console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// Without braces

if (id===100)
  console.log('CORRECT');
else
  console.log('INCORRECT');