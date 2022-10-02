
let obj = { 'printName': printName, 'sum': sum }
module.exports = obj

function printName() {
    console.log("Juuso")
};

function sum(a, b) {
    return a + b;
}