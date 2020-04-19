function findDigits(n) {
    var m = n;
    var counter = 0;
    n = n.toString();
    n = n.split('');
    for ( let i = 0; i < n.length ; i++) {
        var d = n[i];
        if (m % d == 0) {
            counter ++;
        }
        else if (m % d != 0) {
            counter = counter;
        }
        else if (d == 0) {
            counter = counter;
        }
    }
    return counter;
}

console.log(findDigits(1012));