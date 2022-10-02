
export { min, max };

function max(array) {
    return Math.max.apply(Math, array);
}
function min(array) {
    return Math.min.apply(Math, array);
}