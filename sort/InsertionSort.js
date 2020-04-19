const insertionSort = (arr) => {
    var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}


console.log(insertionSort([3,5,97,25,68,36,44,13,78,987,636,36,47,97,99,13]));
