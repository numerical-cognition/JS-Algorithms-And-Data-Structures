// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr) {
    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// ES2015 Version
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}


// Optimized BubbleSort with noSwaps
function bubbleSort(list) {
    let noSwaps;
    for (let i = list.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (list[j] > list[j + 1]) {
                // SWAP
                let temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }

    return list;
}

console.log(bubbleSort([1, 3, 2, 4, 5, 2])) // [1,2,2,3,4,5]
console.log(bubbleSort([4, 3, 5, 7])) // [3,4,5,7]
console.log(bubbleSort([7, 6, 5, 4, 3, 2, 1, 0])) // [0,1,2,3,4,5,6,7]