
function makeCalculation(dividend, divitor) {
    function asynFunc(resolve, reject) {
        if (divitor === 0) {
            reject("cannot divide with zero.");
        } else {
            setTimeout(() => {
                console.log("calculating stuff");
                const division = dividend / divitor;
                resolve(division);
            }, 1000);
        }
    }
    const p = new Promise(asynFunc);
    return p;
}

function sendStuffToBackend(result) {
    function asynFunc(resolve, reject) {
        const random = Math.floor(Math.random() * 2);
        if (random === 0) {
            reject("failed to connect to backend.");
        } else {
            setTimeout(() => {
                console.log(`sending to backend ${result}`);
                resolve("done");
            }, 1000);
        }
    }
    const p = new Promise(asynFunc);
    return p;
}

makeCalculation(10, 2)
    .then((sum) => sendStuffToBackend(sum))
    .then((msg) => console.log(msg))
    .catch((errormsg) => console.log(errormsg));
