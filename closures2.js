//function factory
function makeGreeting(language) {
  return function (firstname, lastname) {
    if (language === 'en') {
      console.log('hello ' + firstname + ' ' + lastname);
    }
    if (language === 'es') {
      console.log('hola ' + firstname + ' ' + lastname);
    }
  };
}

var greetEnglish = makeGreeting('en'); //closure where execution context has en
var greetSpanish = makeGreeting('es'); //closure where execution context has es

greetEnglish('John', 'Doe'); //closure
greetSpanish('John', 'Doe'); //closure

//greetEnglish()
//makeGreeting() --> 'es' (new execution context)
//makeGreeting() --> 'en' (new execution context)
//global exeuction context

//examples of closures and callbacks
function sayHiLater() {
  var greeting = 'hi!';

  setTimeout(function () {
    //
    console.log(greeting);
  }, 3000);
}

sayHiLater();

//callback example

function tellMeWhenDone(callback) {
  var a = 1000; //some work
  var b = 2000; // some work

  callback(); //the 'callback', it runs the function I give it!
}

tellMeWhenDone(function () {
  console.log('I am done');
});

tellMeWhenDone(function () {
  console.log('All done...');
});
