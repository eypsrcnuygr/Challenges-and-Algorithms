function extraLongFactorials(n) {
    let result = 1;
    if(n === 1) {
        return result
    }
    result = n * extraLongFactorials(n - 1)
    return result;
}

console.log(extraLongFactorials(25));