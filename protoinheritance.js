//another way to create objects that doesn't mimic other languages
//prototypal inheritance

//(this code is for browsers that don't support Object.create)
//polfill
// if (!Object.create) {
//     Object.create = function (o) {
//         if (arguments.length > 1) {
//             throw new Error('Object.create implementation' + ' only accepts the first parameter');
//         }
//         function F() {}
//         F.prototype = o;
//         return new F();
//    ;
// }

var person = {
  firstname: 'Whatever',
  lastname: 'You want',
  greet: function () {
    return 'hi' + this.firstname;
  },
};

var mandi = Object.create(person);
(mandi.firstname = 'mandi'), (mandi.lastname = 'haase');
console.log(mandi);

//using classes

class Person2 {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    return 'hi' + this.firstname;
  }
}
var john = new Person2('John', 'Doe');
console.log(john);

//create prototype
//'extends' set the prototype (__proto__)
// syntactic sugar for prototypal inheritance
class InformalPerson extends Person2 {
  constructor(firstname, lastname) {
    super(firstname, lastname);
  }
  greet() {
    return 'yo ' + this.firstname;
  }
}
