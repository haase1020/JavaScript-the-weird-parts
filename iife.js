//function statement
function greet(name) {
  console.log('Hello ' + name);
}
greet('Jon');
//using a function expression
var greetFunc = function (name) {
  console.log('hello ' + name);
};

greetFunc('Jon');

//using an immediately invoked function expression (IIFE)
(function (name) {
  console.log('Hello ' + name);
})('Mandi');

//can also use with variables passed as args
var firstname = 'noel';

(function (name) {
  console.log('Hello ' + name);
})(firstname); //this pattern of IIFE is used ALOT!!
