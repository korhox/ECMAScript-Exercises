function helper() {
    user.sayHello()
}
let user = {
    name: "Jack",
    sayHello: function () {
        console.log(`Hello, ${this.name}!`);
    },
    sayDelayedHello: function () {
        setTimeout(helper, 1000) // works as we are calling the function in the helper  
    }
}
user.sayHello()
user.sayDelayedHello()