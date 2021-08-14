// MERGE function for mearging two arrays together
function merge(arr1, arr2) {
    const result = [];
    let left = 0;
    let right = 0;

    const pushLeft = () => { result.push(arr1[left]); left++; }
    const pushRight = () => { result.push(arr2[right]); right++; }

    while (left < arr1.length && right < arr2.length) {
        if (arr1[left] < arr2[right]) { pushLeft(); }
        else { pushRight(); }
    }

    while (left < arr1.length) { pushLeft(); }
    while (right < arr2.length) { pushRight(); }

    return result;
}

console.log(merge([1, 5, 8], [2, 4, 9])) // [1,2,4,5,8,9]
console.log(merge([0, 0, 3], [1, 2, 3])) // [0,0,1,2,3,3]
console.log(merge([80, 82, 90], [25, 50, 68])) // [25,50,68,80,82,90]


// Recrusive Merge Sort algorithm 
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73]))