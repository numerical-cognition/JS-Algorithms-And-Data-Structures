// Write a recursive function called someRecursive 
// which accepts an array and a callback. The function returns true 
// if a single value in the array returns true when passed to the callback. 
// Otherwise it returns false.

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;


function someRecursive(list, func) {
    if(list.length <= 0) return false;

    let checker = func(list[0]);
    // console.log({checker, list, item: list[0]});
    
    if(checker) return true;
    
    return someRecursive(list.slice(1), func);
}

console.log(someRecursive([1, 2, 3, 4], isOdd)) // true
console.log(someRecursive([4, 6, 8, 9], isOdd)) // true
console.log(someRecursive([4, 6, 8], isOdd)) // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false