function Person(fname, lname) {
    if (this instanceof Person) {
        this.fname = fname;
        this.lname = lname;

        console.log(this instanceof Person);
    } else {
        throw new TypeError("Cannot call a class as a function");
    }
}

var obj1 = new Person('jack', 'smith');      // creates new object Person with the fname and lname variables
var obj2 = Person('jack', 'smith');          // throws TypeError, since not called with new keyword
