// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
// which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num) {
    let a = 1;
    let b = 1;

    function helper(seq) {
        if (seq <= 1) return;

        a = b - a;
        b = b + a;

        return helper(seq - 1);
    }

    helper(num);

    return b;
}

console.log(fib(3)) // 2
console.log(fib(4)) // 3
console.log(fib(5)) // 5
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465



// VERSION 2 - Colts' solution

function fib2(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib2(3)) // 2
console.log(fib2(4)) // 3
console.log(fib2(5)) // 5
console.log(fib2(10)) // 55
console.log(fib2(28)) // 317811
console.log(fib2(35)) // 9227465