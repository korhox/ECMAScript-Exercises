const readlineSync = require("readline-sync");
const fs = require("node:fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

let fileName = readlineSync.question("Give file name: ");

readFile(fileName, "utf-8")
    .then((data) => parseJson(data))
    .then((name) => console.log(name))
    .catch((errormsg) => console.log(errormsg));

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
