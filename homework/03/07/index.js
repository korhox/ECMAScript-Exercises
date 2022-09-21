const readlineSync = require("readline-sync");
const fs = require("node:fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);

function parseJson(data) {
    function func(resolve, reject) {
        const obj = JSON.parse(data);
        if ("name" in obj) {
            resolve(`The content of the file is:\n${obj.name}`);
        } else {
            reject("property name not found.");
        }
    }
    const p = new Promise(func);
    return p;
}

async function readFileAndParse(fileName) {
    const data = await readFile(fileName, "utf-8");
    const name = await parseJson(data);
    return name;
}

let fileName = readlineSync.question("Give file name: ");
readFileAndParse(fileName)
    .then((name) => console.log(name))
    .catch((msg) => console.log(msg));
