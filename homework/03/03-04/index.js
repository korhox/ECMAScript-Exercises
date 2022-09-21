let readlineSync = require("readline-sync");
let fs = require("node:fs");

let fileName = readlineSync.question("Give file name: ");

fs.readFile(fileName, (err, data) => {
    if (err) {
        console.log(`file ${fileName} does not exist.`);
    } else {
        try {
            const obj = JSON.parse(data);

            if ("name" in obj) {
                console.log("The content of the file is:");
                console.log(obj.name);
            } else {
                console.log(`file ${fileName} does not contain json.`);
            }
        } catch (err) {
            console.log(`file ${fileName} does not contain json.`);
        }
    }
});
