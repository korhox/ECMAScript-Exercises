var myFunc = new Function('', 'console.log("hello")')
myFunc.call()

// in this snippet we create a new function object with empty argument and console.log function body.
// when we call myFunc.call(), nothing happens as .call() is not defined object.
// the function would work as expected if we remove ".call".