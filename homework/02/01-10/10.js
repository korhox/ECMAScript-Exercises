function doIt() {
    let result = "";
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    console.log(result);
}

doIt("a");  // outputs a
doIt("a", "b"); // outputs ab
doIt("a", "b", "c"); // outputs abc

