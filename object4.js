// lesson 37
function a() {
  console.log('function a', this); // points to global object(window object)
  this.newvariable = 'hello new variable'; //this gets attached to global object
  console.log('arguments in function a', arguments);
}

var b = function () {
  console.log('var b', this);
};
a();
console.log(newvariable); //don't need dot notation
b();

//object literal
var c = {
  name: 'c object',
  log: function () {
    var self = this; //very common pattern before use of 'let'
    self.name = 'updated c object';
    console.log(self);
    var setname = function (newname) {
      self.name = newname;
    };
    setname('updated again! C object');
    console.log(self);
  },
};
c.log();
