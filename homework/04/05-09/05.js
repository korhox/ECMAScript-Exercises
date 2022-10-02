function doIt() {
    const global = "global";        // create string property named global with value "global" 
    console.log(this)               // outputs global object
    console.log(this == global)     // outputs false, as this is the global object and global has been previously declared as custom constant property, so global is no longer same as the object this is referring to
}

doIt()
console.log(global); // outputs the "global" object instead of the variable created inside the function