// function greet() {
//   console.log('hi');
// }

// greet.language = 'english';
// console.log(greet.language);

//lesson 35 function statements and function expression
//function statement
//this is hoisted since the first word is 'function'
function greet() {
  console.log('hi');
}

greet();

//function expression
//this is not hoisted (all variables start as undefined)
var anonymousGreet = function () {
  console.log('hi there');
};

anonymousGreet();

// can create a fn on the fly:
console.log(function () {
  console.log('howdy');
});
