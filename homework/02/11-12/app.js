const fs = require('fs')

const copy = (from, to, success, error) => {
    if (!from.match(/^.*\.(txt)$/g)) {
        console.log("Please enter the first text file with the extension .txt.");
        process.exit(1);
    }
    if (!to.match(/^.*\.(txt)$/g)) {
        console.log("Please enter the second text file with the extension .txt.");
        process.exit(1);
    }

    fs.stat(from, function (err) {
        if (err == null) {
            fs.copyFile(from, to, () => {
                success();
            });
        } else {
            error();
        }
    });
}

copy("textfile.txt", "copy.txt", () => {
    console.log("Success!");
}, () => {
    console.log("Function failed");
});