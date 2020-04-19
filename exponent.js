function exponent (base, expo) {
    let result = 1;
    if(expo === 0) {
        return 1
    }
    result = result * base * exponent(base, expo - 1);
    return result;
}

console.log(exponent(2,0))