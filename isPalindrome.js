// Write your code below

const isPalindrome = (str) => {
    let isPalindrome = true;
    for (let i = 0; i < str.length; i++) {
        startChar = str[i];
        console.log(startChar, str[str.length - (i + 1)]);
        if (startChar !== str[str.length - (i + 1)]) {
            isPalindrome = false;
        }
    }
    return isPalindrome;
}



console.log(isPalindrome("a"));
// returns true

console.log(isPalindrome("noon"));
// returns true

console.log(isPalindrome("hello"));
// returns false

console.log(isPalindrome("Racecar"));
// returns false

console.log(isPalindrome("racecar"));
// returns true