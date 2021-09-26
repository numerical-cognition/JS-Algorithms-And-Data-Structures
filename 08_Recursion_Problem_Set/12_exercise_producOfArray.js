// Write a function called productOfArray which takes in an array of numbers 
// and returns the product of them all.

console.clear();

// VERSION 1 - Helper Method

function productOfArray(list) {
    let result = 1;

    function helper(helperList) {
        if (helperList.length === 0) return;

        result *= helperList[0];

        return helper(helperList.slice(1))
    }

    helper(list);

    return result;
}


// VERSION 2 - Pure recursion

// function productOfArray(list) {
//     if (list.length === 0) return 1;
//     return list[0] * productOfArray(list.slice(1));
// }


console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60