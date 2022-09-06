// How many tries we do
const maxTries = 100000000000;


function generateLotto() {
    let lotto = [];
    for (let j = 0; j < 7; j++) {
        lotto.push(Math.floor(Math.random() * 40) + 1);
    }
    lotto.sort(function (a, b) { return a - b });
    return lotto;
}

function winNumbers(guess, lotto) {
    var rightOnes = 7;
    for (let i = 0; i < lotto.length; i++) {
        if (!lotto.includes(guess[i])) {
            rightOnes -= 1;
        }
    }
    return rightOnes;
}

function parseVars(vars) {
    for (let i = 0; i < vars.length; i++) {
        vars[i] = Number(vars[i]);
    }
    vars.sort(function (a, b) { return a - b });
    return vars;
}

function main() {
    let guess = parseVars(process.argv.slice(2));
    let startTime = Date.now();
    let right = 0;

    if (guess.length != 7) {
        console.log("Please pass 7 numbers as arguments.")
        process.exit(1);
    }

    for (let i = 0; i < maxTries; i++) {
        var lotto = generateLotto();
        let rightOnes = winNumbers(guess, lotto);
        let tries = Math.round(i + 1);
        if (rightOnes > right) {
            right = rightOnes;
            let elapsedTime = Date.now() - startTime;
            let timer = "";
            if (elapsedTime > 5000 || right > 5) {
                timer = ` It's been ${Math.round(elapsedTime / 1000)} seconds since start of the script.`;
            }
            if (tries >= 52) {
                tries = Math.round(tries / 52) + " years";
            } else {
                tries = tries + " weeks";
            }
            console.log(`A match found! You got ${right} numbers right so far. It's been ${tries} though.` + timer)
        }
        if (right >= 7) {
            console.log("Done!");
            process.exit(0);
        }
    }
    console.log("> We run out of tries. Please increase the maxTries to run guesser longer.");
}

main();