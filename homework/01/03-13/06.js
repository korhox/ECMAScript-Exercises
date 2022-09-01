const var1 = "dog";         // const, or constant is non-changeable permanent variable type
let var2 = "clownfish";     // let is variable that exists only inside the code block
var var3 = "seagull";       // available globally or in function only

console.log(var1);          // outputs dog
console.log(var2);          // outputs clownfish
console.log(var3);          // outputs seagull

console.log()

function test() {
    console.log(var1);      // outputs dog
    console.log(var2);      // outputs clownfish
    console.log(var3);      // outputs seagull
}
test();

console.log();

function test2() {
    // var1 = "cat";        // would throw an error, as it's already defined
    var2 = "shark";
    var3 = "raven";

    console.log(var1);      // outputs dog
    console.log(var2);      // outputs shark
    console.log(var3);      // outputs raven
}
test2();

let testLet = "seagull";
console.log(testLet);       // output seagull
if (true) {     // stupid if , but only testing
    console.log(testLet);   // output seagull
}

function testLetF() {
    testLet = "raven"
    console.log(testLet);   // output raven
}
testLetF();

function testLetF2() {
    let testLet2 = "raven"
    console.log(testLet2);  // output raven
}
testLetF2();
// console.log(testLet2);   // not available anymore, as let is available in the scope and subscopes where it is defined
