console.clear();

function timer(funcName, func, data) {
    let start = process.hrtime();
    const result = func(data);
    let end = process.hrtime();
    console.log(`Function: ${funcName} ---> Result: ${result} ---> Time Elapsed: ${(end[1] - start[1]) / 1000000000} seconds.`)
}


function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

function addUpTo2(n) {
    return n * (n + 1) / 2;
}

timer("addUpTo", addUpTo, 1000000000);
timer("addUpTo2",addUpTo2, 1000000000); 