function linearSearch (arr, num) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([1, 5, 19, 45, 49, 57, 89], 100))