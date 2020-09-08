var person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function () {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  },
};

var logName = function (lang1, lang2) {
  console.log('logged: ' + this.getFullName());
  console.log('arguments: ' + lang1 + ' ' + lang2);
  console.log('----------');
};

var logPersonName = logName.bind(person); //creates a copy of the function

logPersonName('en');

logName.call(person, 'en', 'es'); //executes the function

logName.apply(person, ['en', 'es']); //need to send arguments as an array

//function borrowing
var person2 = {
  firstname: 'Jane',
  lastname: 'Doe',
};

console.log(person.getFullName.apply(person2)); //borrow fn from person

//function currying
function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2); //this makes a always 2
