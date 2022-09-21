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
        setTimeout(() => {
            console.log(`sending to backend ${result}`);
            resolve("done");
        }, 1000);
    }
    const p = new Promise(asynFunc);
    return p;
}

async function makeCalculationAndSendStuffToBackend() {
    const result = await makeCalculation(10, 2);
    const msg = await sendStuffToBackend(result);
    return msg;
}

makeCalculationAndSendStuffToBackend()
    .then((msg) => console.log(msg))
    .catch((error) => console.log(error));
