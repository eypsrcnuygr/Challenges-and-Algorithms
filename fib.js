function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}


function fibWithMemoization (n, memo = []) {
    if (n <= 2) {
        return 1
    }
    if( memo[n] !== undefined) {
        return memo[n]
    }
    var result = fibWithMemoization(n - 1, memo) + fibWithMemoization(n - 2, memo);
    memo[n] = result;
    return result;
}


function fibWithTabulation(n) {
    if (n <= 2) return 1;
    var fibNums = [0 ,1, 1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n]
}

console.log(fibWithTabulation(40))