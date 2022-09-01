const vars = process.argv.slice(2);

function isPalindrome(word) {
    return vars[0].toLowerCase().split("").reverse().join("") == word.toLowerCase();
}
console.log(isPalindrome(vars[0]) ? "Yes it is palindrome!" : "No, it is not palindrome.");