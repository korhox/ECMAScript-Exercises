let user = {
    name: "Jack",
    sayHello: function () {
        console.log(`Hello, ${this.name}!`);
    }
};


let myfunc = user.sayHello
myfunc() // outputs name as undefined as earlier this refers to the sayHello function, not the user object