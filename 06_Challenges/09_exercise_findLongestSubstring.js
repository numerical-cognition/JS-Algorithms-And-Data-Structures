// Write a function called findLongestSubstring, which accepts a string 
// and returns the length of the longest substring with all distinct characters.

console.clear();


// VERSION 1 - Sliding Window Pattern

function findLongestSubstring(str) {

    let index = 0,
        pointer = 0,
        length = 0,
        maxLen = 0,
        counter = {},
        currentChar = "";

    while (index + pointer < str.length) {
        currentChar = str[index + pointer];


        // if currentChar exists in the counter, reset all vars and increment index by 1
        if (counter[currentChar]) {
            index++;
            pointer = 0;
            length = 0;
            counter = {};
        }

        // if currentChar does NOT exist, add it to the counter and increment vars.
        else {
            counter[currentChar] = 1;
            pointer++;
            length++;
        }

        maxLen = Math.max(length, maxLen);
    }

    return maxLen;
}



console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('ritthm')) // 3
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6








// function findLongestSubstring(str) {

//     let index = 0,
//         seeker = 0,
//         length = 0,
//         maxLen = 0,
//         counter = {},
//         targetStr = "",
//         targetChar = "";


//     while (index < str.length && index + seeker < str.length) {
//         targetChar = str[index + seeker];

//         // console.log({ index, maxLen, seeker, length, targetChar, targetStr, counter })

//         if (counter[targetChar]) {
//             index++;
//             seeker = 0;
//             length = 0;
//             targetStr = "";
//             counter = {};
//         } else {
//             counter[targetChar] = (counter[targetChar] || 0) + 1;
//             targetStr = targetStr + targetChar;
//             seeker++;
//             length++;
//         }

//         maxLen = Math.max(length, maxLen);

//     }

//     return maxLen;
// }