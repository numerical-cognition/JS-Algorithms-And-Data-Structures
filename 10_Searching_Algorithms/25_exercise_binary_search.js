// Write a function called binarySearch 
// which accepts a sorted array and a value 
// and returns the index at which the value exists. Otherwise, return -1. 

// This algorithm should be more efficient than linearSearch 
// you can read how to implement it here
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
// https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/


function binarySearch(list, value) {
    let start = 0;
    let end = list.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (start <= end) {
        if (value === list[middle]) return middle;
        if (value > list[middle]) start = middle + 1;
        if (value < list[middle]) end = middle - 1;
        middle = Math.floor((start + end) / 2);
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 4)) // 3
console.log(binarySearch([1, 2, 3, 4, 5], 10)) // -1
console.log(binarySearch([1, 2, 3, 4, 5], 1)) // 0