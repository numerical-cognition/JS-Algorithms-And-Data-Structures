// Write a recursive function called isPalindrome 
// which returns true if the string passed to it is a palindrome 
// (reads the same forward and backward). Otherwise it returns false.


// VERSION 1 - String solution

function isPalindrome(str) {
    
    function helper(newStr) {
        if (newStr.length === 0) return true;

        let lastLetter = newStr.length - 1;

        if (newStr[0] !== newStr[lastLetter]) return false;
        else return helper(newStr.slice(1, lastLetter));
    }

    return helper(str);
}


// VERSION 2 - Array solution

// function isPalindrome(str) {
//     let result = [];

//     function helper(newStr) {
//         if(newStr.length <= 0) return;

//         result.unshift(newStr[0]);
//         // console.log({result, newStr, curr: newStr[0]});

//         return helper(newStr.slice(1));
//     }

//     helper(str);
//     return str === result.join("");
// }


console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false