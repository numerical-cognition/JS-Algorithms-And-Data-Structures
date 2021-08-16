// Write a recursive function called reverse 
// which accepts a string and returns a new string in reverse.


// VERSION 1 - Using Only Strings

function reverse(str) {
    let result = "";

    function helper(newStr) {
        if (newStr.length === 0) return;

        let lastLetter = newStr.length - 1;

        result = result + newStr[lastLetter];

        return helper(newStr.slice(0, lastLetter));
    }

    helper(str);

    return result;
}


// VERSION 2 - Using an Array

// function reverse(str) {
//     let result = [];

//     function helper(newStr) {
//         if(newStr.length <= 0) return;

//         result.unshift(newStr[0]);

//         return helper(newStr.slice(1));
//     }

//     helper(str);
//     return result.join("");
// }

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'