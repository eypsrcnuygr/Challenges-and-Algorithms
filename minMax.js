function miniMaxSum(arr) {
    let min = 0;
    let max = 0;
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
    insertionSort(arr);
    max = arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3] + arr[arr.length - 4]; 
    min = arr[0] + arr[1] + arr[2] + arr[3];
    return console.log(min, max)
         
}

miniMaxSum([5,4,3,2,1]);