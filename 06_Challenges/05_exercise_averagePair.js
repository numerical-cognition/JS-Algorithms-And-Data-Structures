// Write a function called averagePair. 
// Given a sorted array of integers and a target average, determine if 
// there is a pair of values in the array where the average of the pair equals the target average. 
// There may be more than one pair that matches the average target.

console.clear();

// VERSION 1 - Multiple Pointers

function averagePair(list, target) {
    if (list.length === 0) return false;

    let left = 0;
    let right = list.length - 1;
    while(left < right) {
        let average = (list[left] + list[right]) / 2;
        if(average === target) return true;
        else if(average > target) right--;
        else left++;
    }
    return false;
}

console.log(averagePair([1, 2, 3], 2.5)) // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1,0,3,5,5,6], 4.1)) // false
console.log(averagePair([], 4)) // false


// function averagePair(list, target) {
//     if (list.length === 0) return false;

//     let base = 0;
//     let seeker = 1;
//     while(base < seeker) {
//         if(seeker >= list.length) return false;
        
//         let average = (list[base] + list[seeker]) / 2;
//         if(average === target) return true;
//         base++;
//         seeker++;
//     }
// }