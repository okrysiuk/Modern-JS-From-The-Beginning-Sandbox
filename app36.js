//Object.prototype
//Person.prototype

//Person constructor
class Person {
  constructor(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  }
  /*
  calculateAge () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  */
}
// Calculate age

Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

//Get fullname 

Person.prototype.getFullName = function() {
  return `${this.firstName}  ${this.lastName}`;
};

//Gets married
Person.prototype.getsMarried = function(newLastName) {
  return this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);
console.log(mary.getFullName());
mary.getsMarried('Smith');
console.log(mary.getFullName());