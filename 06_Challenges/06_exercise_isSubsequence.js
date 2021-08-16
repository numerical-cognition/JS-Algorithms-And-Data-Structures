// Write a function called isSubsequence 
// which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. 
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

console.clear();

// VERSION 1 - Multiple Pointers

function isSubsequence(target, source) {

    let search = 0;

    for(let item of source) {
        if(item === target[search]) search++;
        if(search === target.length) return true;
    }
    return false;
}

console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false
console.log(isSubsequence('abc', '')) // false

