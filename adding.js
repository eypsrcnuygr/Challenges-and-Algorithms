const adder = (n) => {
    let total = 0;
    for(let i = 0; i <=n; i++) {
        total += i;
    }
    return total;
};

const outcome = adder(5);
console.log(outcome);