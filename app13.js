const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  adress: {
    city: 'Miamy',
    state: 'Florida'
  },
  getBirthYear: function() {
    return 2017 - this.age;
  }
};

let val;

val = person;
// Get specific value

val = person.firstName;
val = person ['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.adress.state;
val = person.adress['city'];
val = person.getBirthYear();

const people = [
  {name: 'Jonh', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Jake', age: 21}
];

for(let i = 0; i < people.length; i++){
console.log(people[i].name);
}


console.log(val);