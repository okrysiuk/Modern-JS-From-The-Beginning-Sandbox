function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`; 
};

const person1 = new Person('Jonh', 'Doe');
console.log(person1.greeting());


//Customer Cunstructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

//Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

//Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

//Create customer
const customer1 = new Customer('Tom', 'Smith', '555-5555', 'Standard');
console.log(customer1);
console.log(customer1.greeting());

//Customer greeting
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
};
console.log(customer1.greeting());