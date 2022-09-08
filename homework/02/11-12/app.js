const fs = require('fs')

let arg = String(process.argv.slice(2)[0]);

if (!arg.match(/^.*\.(txt)$/g)) {
    console.log("Please enter text file with the extension .txt.");
    process.exit(1);
}

fs.stat(arg, function (err) {
    if (err == null) {
        fs.readFile(arg, "utf-8", (err, data) => {
            console.log(data);
        });
    } else {
        console.log("Could not read the file. Are you sure it exists?");
        process.exit(1);
    }
});


