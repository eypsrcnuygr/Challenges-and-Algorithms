function countingValleys(n, s) {
    const min = 2;
    const max = 1000000;
    let valleys = 0;
    let isInValley = false; 
    
    if (typeof s === 'string') {
        s = s.split('');
    }
    else {
        s = s; 
    }

    if (s.length >= min
         && s.length <= max
         && n === parseInt(n, 0)
         && n >= min
         && n <= max 
         && n === s.length) {
           
    s = s.map(steps => {
        if (steps === 'U') {
            return 1;
            }
        else {
            return -1;
            }
         })
         
         let path = 0;
         for(let i = 0; i < s.length; i++) {
              path += s[i];
              if (path < 0 && !isInValley) {
                   isInValley = true; 
              }
              if (path == 0 && isInValley) {
                   valleys++;
                   isInValley = false;
              }    
         } 
    }
     
    return valleys; 
}

console.log(countingValleys(12, "DDUUDDUDUUUD"));