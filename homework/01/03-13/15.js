
// How many tries we do
const maxTries = 500000000000000;


function generateLotto() {
    let lotto = [];
    for (let j = 0; j < 7; j++) {
        lotto.push(Math.floor(Math.random() * 40) + 1);
    }
    return lotto;
}

function isWin(array1, array2) {
    let isWin = true;
    for (let i = 0; i < array2.length; i++) {
        if (!array2.includes(array1[i])) {
            isWin = false;
        }
    }
    return isWin;
}

function parseVars(vars) {
    for (let i = 0; i < vars.length; i++) {
        vars[i] = Number(vars[i]);
    }
    return vars;
}

function main() {
    let guess = parseVars(process.argv.slice(2));
    let wins = 0;
    let startTime = Date.now();

    if (guess.length != 7) {
        console.log("Please pass 7 numbers as arguments.")
        process.exit(1);
    }

    for (let i = 0; i < maxTries; i++) {
        let lotto = generateLotto();
        lotto.sort(function (a, b) { return a - b });
        if (isWin(guess, lotto)) {
            wins++;
            let elapsedTime = Date.now() - startTime;
            console.log(`A match found! You got ${wins} right so far. It's been ${Math.round((i + 1 / 365) / 1000)} millennia though. It's been ${Math.round(elapsedTime / 1000)} seconds since start of the script.`)
        }
    }
}

main();