let v = "Jussi";
let x = "You're";                                   // single quote works inside double quotes
let y = 'And they said "Hello".';                   // double quotes work inside single quotes
let z = `And ${v} asked
"What's going on?".`;                               // both quotes mentioned above work in backticks,
//                                                  // also allows line breaks and variables indise

console.log(x);
console.log(y);
console.log(z);