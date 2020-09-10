// can set globally by typing "use strict"; at top of file
// // if you don't want to set globally for the file, you can do the following:

function logNewPerson() {
  // set strict in this scope only
  'use strict';

  var person2;
  persom2 = {};
  console.log(persom2);
}

//outside local scope "persom" will not throw an error because not in strict mode
var person;
persom = {};
console.log(persom);
logNewPerson();
