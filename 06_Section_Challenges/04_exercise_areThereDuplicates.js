// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.  
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

console.clear();

// VERSION 1 - Frequency Counter Pattern

function areThereDuplicates(...args) {
    if (args.length === 0) return false;

    const obj1 = {};

    for (let arg of args) {
        obj1[arg] ? obj1[arg] = obj1[arg] + 1 : obj1[arg] = 1;
        if (obj1[arg] > 1) return true
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1,2,2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true



// VERSION 2 - Multiple Pointer pattern

function areThereDuplicates2(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}

console.log(areThereDuplicates2(1, 2, 3)) // false
console.log(areThereDuplicates2(1, 2, 2)) // true
console.log(areThereDuplicates2('a', 'b', 'c', 'a')) // true



// VERSION 3 - Using a Set

function areThereDuplicates3(...args) {
    return new Set(args).size !== args.length;
}

console.log(areThereDuplicates3(1, 2, 3)) // false
console.log(areThereDuplicates3(1, 2, 2)) // true
console.log(areThereDuplicates3('a', 'b', 'c', 'a')) // true