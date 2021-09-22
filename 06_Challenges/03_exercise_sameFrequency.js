// Write a function called sameFrequency. 
// Given two positive integers, find out if the two numbers have the same frequency of digits.

console.clear();

function sameFrequency(num1, num2) {
    num1 = String(num1);
    num2 = String(num2);

    if (num1.length !== num2.length) return false;

    let obj1 = {},
        obj2 = {};

    for (let char of num1) {
        obj1[char] = (obj1[char] || 0) + 1;
    }

    for (let char of num2) {
        obj2[char] = (obj2[char] || 0) + 1;
    }

    for (let key in obj1) {
        if (key in obj2 && obj1[key] === obj2[key]) continue;
        else return false;
    }

    return true;
}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(1155, 5511)) // true
console.log(sameFrequency(22, 222)) // false



// function sameFrequency(num1, num2) {
//     if (String(num1).length !== String(num2).length) {
//         return false;
//     }

//     const obj1 = {};
//     const obj2 = {};

//     for(let num of String(num1)) {
//         obj1[num] ? obj1[num] = obj1[num] + 1 : obj1[num] = 1;
//     }

//     for(let num of String(num2)) {
//         obj2[num] ? obj2[num] = obj2[num] + 1 : obj2[num] = 1;
//     }

//     for(let key in obj1) {
//         if(key in obj2 && obj1[key] === obj2[key]) {
//             continue;
//         } else {
//             return [false, obj1, obj2];
//         }
//     }

//     return [true, obj1, obj2];
// }