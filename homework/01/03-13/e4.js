var readlineSync = require("readline-sync");

var name = readlineSync.question("Wait a minute... Who are you? ");
console.log("Ok, " + name + ". I'll tell you a secret. :kazoo:");
var n = readlineSync.question("But first, give me a number! ");
var result;
for (var i = 0; i < n; i++) {
    result += name;
}
console.log("Ha! The secret is: " + result + ".");