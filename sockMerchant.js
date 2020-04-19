'use strict'
function sockMerchant(n, ar) {
    let counter = 0;
    for (let i = 0; i < n; i++) {
        for (let j = ar.length -1; j >= 0; j--) {
            if (ar[i] === ar[j] && i != j && n >= 1 && n <= 100 && ar[i] >= 1 && ar[i] <= 100) {
                ar.splice(i,1);
                ar.splice(j - 1, 1);
                counter++;
                if (ar.length <= 1) {
                    return counter;
                }
                i--
            }      
        }
    }
    return counter
}


console.log(sockMerchant(15,[15,25,35,25,67,79,67,89,96,54,48,48,26,26,89]));

