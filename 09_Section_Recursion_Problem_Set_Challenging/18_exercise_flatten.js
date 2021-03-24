// Write a recursive function called flatten 
// which accepts an array of arrays and returns a new array with all values flattened.

function flatten(list) {
    let flat = [];

    function helper(arr) {
        if(arr.length <= 0) return;

        if(Array.isArray(arr[0])) arr.push(...arr[0]);

        if(typeof arr[0] === "number") flat.push(arr[0]);

        // console.log({flat, arr});
        return helper(arr.slice(1))
    }

    helper(list);
    return flat;
}




console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])) // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]


// VERSION 2 - Without recursion

// function flatten(list) {
//     return list.toString().split(",").map(element => {
//         return parseInt(element);
//     });
// }