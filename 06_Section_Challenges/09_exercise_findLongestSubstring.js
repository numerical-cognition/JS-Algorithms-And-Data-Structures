// Write a function called findLongestSubstring, which accepts a string 
// and returns the length of the longest substring with all distinct characters.

console.clear();


// VERSION 1 - Sliding Window Pattern

function findLongestSubstring(str) {

    let window = 1;
    let max = 1;
    let list = []

    while(window < str.length) {

        for(i = 0; i <= window; i++) {
            list.push(str[i])
        }

        let base = list.join("");

        for(j = window; j < str.length; j++) {
            // if(base.includes(str[j])) 

            base.concat(str[j]);
            base = base.slice(1)
            console.log({window, max: Math.max(base.length, max), letter: str[j], base});
        }

        

        window++;
        max = Math.max(base.length, max);
        list = [];
    }

    return max;
}




console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('ritthm')) // test
// console.log(findLongestSubstring('rithmschool')) // 7
// console.log(findLongestSubstring('thisisawesome')) // 6
// console.log(findLongestSubstring('thecatinthehat')) // 7
// console.log(findLongestSubstring('bbbbbb')) // 1
// console.log(findLongestSubstring('longestsubstring')) // 8
// console.log(findLongestSubstring('thisishowwedoit')) // 6