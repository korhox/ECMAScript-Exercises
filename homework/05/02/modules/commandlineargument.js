export { cliargs }

function cliargs() {
    let args = process.argv.slice(2);
    for (const arg in args) {
        if (isNaN(Number(arg))) {
            throw TypeError("All arguments must be numbers.");
        }
        args[arg] = Number(args[arg]);
    }
    return args;
}