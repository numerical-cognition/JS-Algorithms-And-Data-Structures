// Write a function called LinearSearch
// which accepts an array and a value, and returns the index at which the value exists. 
// If the value does not exist in the array, return -1.


function linearSearch(list, value) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === value) return i;
    }
    return -1;
}

console.log(linearSearch([1,2,3,4,5,5], 4)); // 3
console.log(linearSearch([1,2,3,4,5,5], 24)); // -1
console.log(linearSearch([1,2,3,4,5,5], 5)); // 4