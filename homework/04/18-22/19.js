// let user = {
//     name: "Jack",
//     sayHello: function () {
//         console.log(`Hello, ${this.name}!`);
//     },
//     sayDelayedHello: function () {
//         let variable = 10
//         setTimeout(function () {
//             console.log(variable)
//         }, 1000)
//     }
// }
// user.sayDelayedHello()

// // 10



// let user = {
//     name: "Jack",
//     sayHello: function () {
//         console.log(`Hello, ${this.name}!`);
//     },
//     sayDelayedHello: function () {
//         console.log(this)
//         setTimeout(function () {
//             // console.log(this)
//         }, 1000)
//     }
// }
// user.sayDelayedHello()

// //{name: 'Jack', sayHello: ƒ, sayDelayedHello: ƒ}



// let user = {
//     name: "Jack",
//     sayHello: function () {
//         console.log(`Hello, ${this.name}!`);
//     },
//     sayDelayedHello: function () {
//         console.log(this)
//         setTimeout(function () {
//             console.log(this)
//         }, 1000)
//     }
// }
// user.sayDelayedHello()

// // {name: 'Jack', sayHello: ƒ, sayDelayedHello: ƒ}
// // Timeout { _idleTimeout: 1000, _idlePrev: null, _idleNext: null, _idleStart: 120, _onTimeout: ƒ, … }



// let user = {
//     name: "Jack",
//     sayHello: function () {
//         console.log(`Hello, ${this.name}!`);
//     },
//     sayDelayedHello: function () {
//         // THIS WORKS
//         console.log(this)
//         setTimeout(function () {
//             // THIS DOES NOT WORK
//             console.log(this)
//         }, 1000)
//     }
// }
// user.sayDelayedHello()

// // {name: 'Jack', sayHello: ƒ, sayDelayedHello: ƒ}
// // Timeout { _idleTimeout: 1000, _idlePrev: null, _idleNext: null, _idleStart: 123, _onTimeout: ƒ, … }





let user = {
    name: "Jack",
    sayHello: function () {
        console.log(`Hello, ${this.name}!`);
    },
    sayDelayedHello: function () {
        let thisWorks = this
        console.log(this)
        setTimeout(function () {
            thisWorks.sayHello()
        }, 1000)
    }
}
user.sayDelayedHello()