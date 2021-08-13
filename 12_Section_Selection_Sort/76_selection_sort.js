
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    return arr;
}

console.log(selectionSort([1, 3, 2, 4, 5, 2])) // [1,2,2,3,4,5]
console.log(selectionSort([4, 3, 5, 7])) // [3,4,5,7]
console.log(selectionSort([7, 6, 5, 4, 3, 2, 1, 0])) // [0,1,2,3,4,5,6,7]