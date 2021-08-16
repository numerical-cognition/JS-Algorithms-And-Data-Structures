// Write a function called naiveSerach that has two parameters.
// p1) source string, and p2) a pattern string.
// Check if the pattern sting is contained within a source string, 
// and count the number of times that that occures.

function naiveSearch(source, pattern){
    var count = 0;
    for(var i = 0; i < source.length; i++){
        for(var j = 0; j < pattern.length; j++){
           if(pattern[j] !== source[i+j]) break;
           if(j === pattern.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled", "lol")) // 1
console.log(naiveSearch("this is a test", "is")) // 2
console.log(naiveSearch("this is a test", "zz")) // 0