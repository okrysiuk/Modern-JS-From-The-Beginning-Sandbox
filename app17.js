// Function declaration
/*
function greet(firstName = 'John', lastName = 'Wick'){
  //if(typeof firstName === 'undefined'){firstName = 'John'}
  //if(typeof lastName === 'undefined'){lastName = 'Wick'}           ES5 only

  //console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet('Steve', 'Smith'));
*/
// Function expresions
const square = function(x = 3){
  return x*x;
};
// console.log(square());

// Immediatly invokable expression
/*
(function(){
  console.log('I am running..');
})();

(function(name){
  console.log('I am running ' + name);
})('Brad');
*/
// Property methods

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log('Edit todo ' + id);
  }
};

todo.delete = function(){
  console.log('Delete todo');
};
todo.add();
todo.edit(5);
todo.delete();