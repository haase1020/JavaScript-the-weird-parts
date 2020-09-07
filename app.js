// //lesson 30 objects and the dot
// var person = new Object();

// person['firstname'] = 'Mandi'; //firstname property
// person['lastname'] = 'Haase'; //lastname property

// var firstNameProperty = 'firstname';
// console.log(person);
// console.log(person[firstNameProperty]); //bracket notation

// console.log(person.firstname); //dot notation
// console.log(person.lastname);

// person.address = new Object();
// person.address.street = '1111 Joy Lane';
// person.address.city = 'Alexandria';
// person.address.state = 'VA';

// //note: dot operator is always preferred!
// console.log(person.address.street);
// console.log(person['address']['state']);

//lesson 31 objects and object literals
var person = { firstname: 'Mandi', lastname: 'Haase' };
console.log(person);

//the following is the same:
person = new Object();
person.firstname = 'Mandi';
person.lastname = 'Haase';
console.log(person);

//this is also the same
person2 = new Object();
person2['firstname'] = 'Mandi';
person2['lastname'] = 'Haase';
console.log(person2);
