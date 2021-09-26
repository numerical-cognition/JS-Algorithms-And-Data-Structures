// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
// which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

console.clear();

// VERSION 1 - Using a list 

function fib(num) {
    const fibonnaci = [1, 1];

    function helper(a, b, helperNum) {
        if (helperNum <= 1) return;

        fibonnaci.push(a + b);

        return helper(b, a + b, helperNum - 1)
    }

    helper(1, 1, num)

    return fibonnaci[num - 1];
}

// VERSION 2  - Using a list 

// function fib(num) {
//     let fibonnaci = [1, 1];

//     function helper(length) {
//         if (length === num) return;

//         fibonnaci.push(fibonnaci[length - 1] + fibonnaci[length - 2])

//         return helper(fibonnaci.length);
//     }

//     helper(fibonnaci.length);

//     return fibonnaci.pop();
// }


// VERSION 3 - Computing a number (backwards)

// function fib(num) {
//     let a = 1;
//     let b = 1;

//     function helper(seq) {
//         if (seq <= 1) return;

//         a = b - a;
//         b = b + a;

//         return helper(seq - 1);
//     }

//     helper(num);

//     return b;
// }


// // VERSION 4 - Pure Recursion

// function fib(n){
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }


console.log(fib(3)) // 2
console.log(fib(4)) // 3
console.log(fib(5)) // 5
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465