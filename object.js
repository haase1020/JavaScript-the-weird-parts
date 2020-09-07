//lesson 33 JSON and object literals
var objectLiteral = {
  firstname: 'Noel',
  isAProgrammer: true,
};

console.log(JSON.stringify(objectLiteral)); //to put into object form

var jsonValue = JSON.parse('{"firstname": "Mary", "isAProgrammer": true}');

console.log(jsonValue);
