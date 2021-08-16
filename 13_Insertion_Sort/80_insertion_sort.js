function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
            arr[j] = currentVal;
        }
    }

    return arr;
}

console.log(insertionSort([1, 3, 2, 4, 5, 2])) // [1,2,2,3,4,5]
console.log(insertionSort([4, 3, 5, 7])) // [3,4,5,7]
console.log(insertionSort([7, 6, 5, 4, 3, 2, 1, 0])) // [0,1,2,3,4,5,6,7]