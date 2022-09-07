const repeat = (string, times = 1) => {
    let result = "";
    for (let i = 0; i < times; i++) {
        result += string;
    }
    return result;
}
console.log(repeat("moi")) // outputs "moi"
console.log(repeat("moi", 4)) // outputs "moimoimoimoi"