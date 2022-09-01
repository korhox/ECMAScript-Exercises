function abs(val) {
    return Math.abs(Number(val));       // Since using Math class wasn't forbidden
}

console.log(abs(-7));
console.log(abs(7));













//// and for real, here's what you probably were looking for:
// function real_abs(val) {
//     if (val > 0) {
//         return val;
//     } else {
//         return -1 * val;
//     }
// }
// console.log(real_abs(-7));
// console.log(real_abs(7));