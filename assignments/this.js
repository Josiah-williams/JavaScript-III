// / The for principles of "this";
// * in your own words. explain the four principle for the "this" keyword below.
// *
// *
1
function sayName(name) {// code example for Window Binding
    console.log(this);
    return name;
  }
  sayName("alexsandra");

  2
const myObj = {// code example for Implicit Binding
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('williams');

  3
function CordialPerson(greeter) {// code example for New Binding
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
 
  
function CordialPerson(greeter) {
  this.greeting = 'Hello ';
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();

4
function baz(name, age) { // code example for Explicit Binding
console.log(this);
return name + ' your age is ' + age; 
  
  }
  
  baz.call('banana', 'Shaun', 35);  
  baz.apply('banana', ['Shaun', 35]); 
  var copyOfFunction = baz.bind('banana'); 
  

// * write out a code example of each explanation above
// */

// // Principle 1
// // "window Binding" provides a simple and consistent way for applications to present and interact with data. 

// Principle 2
// "Implicit Binding"An implicit binding mechanism creates the state associated with a binding in a manner invisible to the client.


// Principle 3
// "new Binding"is used to create and maintain a simple binding between the property of a control and either the property of an object, or the property of the current object in a list of objects. 


// Principle 4
// "Explicit Binding" allows developers to use the "call" method and pass an explicit reference for the "this" binding. 


