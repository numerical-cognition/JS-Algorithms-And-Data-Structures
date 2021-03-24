// Write a recursive function called isPalindrome 
// which returns true if the string passed to it is a palindrome 
// (reads the same forward and backward). Otherwise it returns false.


function isPalindrome(str) {
    let result = [];

    function helper(newStr) {
        if(newStr.length <= 0) return;

        result.unshift(newStr[0]);
        // console.log({result, newStr, curr: newStr[0]});

        return helper(newStr.slice(1));
    }

    helper(str);
    return str === result.join("");
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false