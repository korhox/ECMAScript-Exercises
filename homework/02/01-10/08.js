function doIt() {
    console.log('hello');
}
console.log(typeof doIt);                       // Outputs the type of doIt, which is a function
console.log(doIt instanceof Function);          // Outputs boolean of is x instance of y. When x is instance of y - result is true, as in this example doIt is instance of Function. 