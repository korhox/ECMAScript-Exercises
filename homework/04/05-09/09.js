function Person(fname, lname) {
    if (this instanceof Person) {
        this.fname = fname;
        this.lname = lname;

        console.log(this instanceof Person);
    } else {
        return new Person(fname, lname);
    }
}

var obj1 = new Person('jack', 'smith');      // creates new object Person with the fname and lname variables
var obj2 = Person('jack', 'smith');          // creates new object same way as above, since new keyword is used in line 8
