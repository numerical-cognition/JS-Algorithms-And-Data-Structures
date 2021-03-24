// Write a recursive function called reverse 
// which accepts a string and returns a new string in reverse.

function reverse(str) {
    let result = [];

    function helper(newStr) {

        if(newStr.length <= 0) return;

        result.unshift(newStr[0]);
        // console.log({result, newStr: newStr[0]})

        return helper(newStr.slice(1));
    }

    helper(str);
    return result.join("");
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'