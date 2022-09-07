// did this at 04, using anon functions I think

const isPositiveInteger = (value, onSuccess, onError) => { value >= 0 ? onSuccess() : onError(); }

isPositiveInteger(5, () => {
    console.log("Yeah!");
}, () => {
    console.log("Nope.");
});

isPositiveInteger(0, () => {
    console.log("Yeah!");
}, () => {
    console.log("Nope.");
});

isPositiveInteger(-0.000000000000000000000000000000000000000000000000000001, () => {
    console.log("Yeah!");
}, () => {
    console.log("Nope.");
});

isPositiveInteger(-5, () => {
    console.log("Yeah!");
}, () => {
    console.log("Nope.");
});

isPositiveInteger(Infinity, () => {
    console.log("Yeah!");
}, () => {
    console.log("Nope.");
});

isPositiveInteger(-Infinity, () => {
    console.log("Yeah!");
}, () => {
    console.log("Nope.");
});