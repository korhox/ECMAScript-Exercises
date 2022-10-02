let user = {
    name: "Jack",
    sayHello: function () {
        console.log(`Hello, ${this.name}!`);
    },
    sayDelayedHello: function () {
        setTimeout(() => {
            this.sayHello()
        }, 1000)
    }
}
user.sayDelayedHello()