// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.  
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

console.clear();

// VERSION 1 - Frequency Counter Pattern

function areThereDuplicates(...args) {
    if (args.length <= 1) return false;

    const counter = {};

    for (let item of args) {
        counter[item] = (counter[item] || 0) + 1;
        if (counter[item] > 1) return true;
    }

    return false;
}


console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true



// VERSION 2 - Multiple Pointer pattern

// function areThereDuplicates(...args) {
//     // Two pointers
//     args.sort((a, b) => a > b);
//     let start = 0;
//     let next = 1;
//     while (next < args.length) {
//         if (args[start] === args[next]) {
//             return true
//         }
//         start++
//         next++
//     }
//     return false
// }



// VERSION 3 - Using a Set

// function areThereDuplicates(...args) {
//     return new Set(args).size !== args.length;
// }