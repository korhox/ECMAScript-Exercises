const doIt = (what) => {
    const inner = () => { console.log(what ? "world" : "hello") };
    return inner;
}

doIt(false)() // outputs hello
doIt(true)()  // outputs world