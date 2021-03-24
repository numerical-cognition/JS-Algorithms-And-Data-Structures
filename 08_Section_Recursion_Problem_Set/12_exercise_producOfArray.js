// Write a function called productOfArray which takes in an array of numbers 
// and returns the product of them all.

function productOfArray(list) {
    let product = 1;
    
    function helper(arr) {
        if(arr.length === 0) return;
        
        product *= arr[0]
        
        return helper(arr.slice(1));
    }
    
    helper(list)
    
    return product
    
}
console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60



// VERSION 2 - Colt solution

function productOfArray2(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray2(arr.slice(1));
}

console.log(productOfArray2([1,2,3])) // 6
console.log(productOfArray2([1,2,3,10])) // 60