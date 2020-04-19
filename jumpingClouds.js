function jumpingOnClouds(c) {
    let jumps = 0;
    let index = c.length - 1;
    while (index > 0) {
        if(c[index] === 0 && c[index -1] === 0 && c[index - 2] === 0) {
            jumps++;
            index = index - 2;
        }
        else if (c[index] === 0 && c[index - 1] === 1 && c[index - 2] === 0) {
            jumps++
            index = index - 2;
        }
        else if (c[index] === 0 && c[index - 1] === 0 && c[index - 2] === 1) {
            jumps++;
            index = index - 1
        }
        else {
            jumps ++;
            index = index - 2;
        }
    }
    return jumps;
};

console.log(jumpingOnClouds([0, 0, 0, 1, 0 ,0]));
