let user = {
    name: "Jack",
    sayHello: function () {
        console.log(`Hello, ${this.name}!`);
    }
}

user.sayHello()


let f = user.sayHello // does not work since we are copying the function
f()


function sayHello() {
    user.sayHello(); // works because we are calling it here
}
setTimeout(() => {
    sayHello()
}, 1000);


setTimeout(() => user.sayHello(), 1000);

user.sayHello = function () { console.log("does it work?"); };

// function is changed before it is called in timeout