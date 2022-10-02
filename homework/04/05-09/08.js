class Person {
    constructor(fname, lname) {
        console.log(this instanceof Person);
    }
}

var obj1 = new Person('jack', 'smith');      // creates new object Person with the fname and lname variables
var obj2 = Person('jack', 'smith');          // throws TypeError, since not called with new keyword
