function Person(fname, lname) {
    console.log(this instanceof Person)
}

var obj1 = new Person('jack', 'smith');      // creates new object Person with the fname and lname variables
var obj2 = Person('jack', 'smith');          // creates obj2 named property with the returned data of Person function
