// Write a recursive function called capitalizeFirst. 
// Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(list) {
    let newList = [];
    function helper(arr) {
        if(arr.length === 0) return;
        newList.push(arr[0][0].toUpperCase() + arr[0].slice(1));
        return helper(arr.slice(1))
    }
    helper(list);
    return newList;
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
