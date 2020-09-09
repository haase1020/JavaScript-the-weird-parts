// always use the capital letter to know its a function constructor
//this pattern will decline in future code, but important to know
//using a class declaration is better -> class Person...
function Person(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('this function is invoked');
}

//when you add method to prototype, only takes up one slot in memory instead of adding to function constructor
// adding methods to prototype results in more effficent code
Person.prototype.getFullName = function () {
  return this.firstname + ' ' + this.lastname;
};
//'new' is an operator: creates an empty object and invokes the function
//this generates the key word 'this': in this case points to 'this' in function Person
var sally = new Person('sally', 'smith');
console.log(sally);

var mitch = new Person('mitch', 'mighty');
console.log(mitch);

Person.prototype.getFormalFullName = function () {
  return this.lastname + ', ' + this.firstname;
};

console.log(sally.getFormalFullName()); // this works for Sally even though created in Mitch because of prototype method

//protoype is an attribute of all functions and used only be the 'new' operator
