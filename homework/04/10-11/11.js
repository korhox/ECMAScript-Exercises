function doIt(a, b) {
    console.log(this)
}

doIt(5, 5);
doIt.apply({}, [5, 5])

let object = { "key": "value" }
doIt.apply(object, [5, 5])


// In apply args are given in array