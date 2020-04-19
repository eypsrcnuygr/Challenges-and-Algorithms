function autopianTree (n) {
    var height = 1;
    for (let i = 0; i < n; i++) {
        if(i % 2 === 1) {
            height += 1;
        }
        else {
            height = 2*height;
        }
        
    }
    return height;
}

console.log(autopianTree(5))