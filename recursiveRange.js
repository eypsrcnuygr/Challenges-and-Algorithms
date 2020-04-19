function recursiveRange (num) {
    let total = 0;
    if(num === 0) {
        return total;
    }   
    total = num + recursiveRange(num -1);
    return total;
}

console.log(recursiveRange(3));