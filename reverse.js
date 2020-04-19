function reverse (str) {
    let str2 = '';
    if(str.length === 0) {
        return str2
    }
    
    str2 = str.slice(-1) + reverse(str.slice(0, -1));
    return str2;
}

console.log(reverse('Merve'));