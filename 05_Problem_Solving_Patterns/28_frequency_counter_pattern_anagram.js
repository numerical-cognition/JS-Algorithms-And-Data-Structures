// Given two strings, write a function to determine if 
// the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging 
// the letters of another, such as cinema, formed from iceman

// VERSION 2 - My Solution

const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    const obj1 = {};
    const obj2 = {};

    for (let char of str1) {
        obj1[char] = (obj1[char] || 0) + 1;
    }

    for (let char of str2) {
        obj2[char] = (obj2[char] || 0) + 1;
    }

    for (let key in obj1) {
        if (key in obj2 && obj1[key] === obj2[key]) continue;
        else return false;
    }

    return true;
}

console.log(validAnagram("", "")) // true
console.log(validAnagram("aaz", "zza")) // false
console.log(validAnagram("abba", "bbaa")) // true
console.log(validAnagram("abba", "bbaaa")) // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")) // false
console.log(validAnagram("texttwisttime", "timetwisttext")) // true


// VERSION 2 - My Solution

// const validAnagram = (str1, str2) => {
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     const obj1 = {};
//     const obj2 = {};

//     for (let str of str1) {
//         if (obj1[str]) {
//             obj1[str] = obj1[str] + 1;
//         } else obj1[str] = 1;
//     }

//     for (let str of str2) {
//         if (obj2[str]) {
//             obj2[str] = obj2[str] + 1;
//         } else obj2[str] = 1;
//     }

//     for (let key in obj1) {

//         if (key in obj2 && obj1[key] === obj2[key]) continue;
//         else return false;
//     }
//     return true;
// }
