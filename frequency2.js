function sameFrequency(num1, num2) {
    let lookup = {};
    if(num1.toString().length != num2.toString().length) {
        return false
    }
    for(let i = 0; i < num1.toString().length; i++){
        let number = num1.toString()[i];
        lookup[number] ? lookup[number] += 1 : lookup[number] = 1; 
    }
    console.log(lookup);

    for(let i = 0; i < num2.toString().length; i++) {
        let number = num2.toString()[i];
        if(!lookup[number]){
            return false
        }
        else{
            lookup[number] -= 1
        }
    }
    return true
};

console.log(sameFrequency(2254, 5224));