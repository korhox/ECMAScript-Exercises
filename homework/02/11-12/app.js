const fs = require('fs')

let originalFname = String(process.argv.slice(2)[0]);
let copyFname = String(process.argv.slice(2)[1]);

if (!originalFname.match(/^.*\.(txt)$/g)) {
    console.log("Please enter the first text file with the extension .txt.");
    process.exit(1);
}
if (!copyFname.match(/^.*\.(txt)$/g)) {
    console.log("Please enter the second text file with the extension .txt.");
    process.exit(1);
}

fs.stat(originalFname, function (err) {
    if (err == null) {
        fs.copyFile(originalFname, copyFname, () => {
            console.log("File copied successfully!");
        });
    } else {
        console.log("Could not read the file. Are you sure it exists?");
        process.exit(1);
    }
});


