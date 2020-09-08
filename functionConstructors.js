function Person(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('this function is invoked');
}

//'new' is an operator: creates an empty object and invokes the function
//this generates the key word 'this': in this case points to 'this' in function Person
var sally = new Person('sally', 'smith');
console.log(sally);

var mitch = new Person('mitch', 'mighty');
console.log(mitch);
