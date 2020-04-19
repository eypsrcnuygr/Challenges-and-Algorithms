function binarySearch (arr, num) {
    let len = arr.length -1;
    for (let i = 0; i < arr.length; i++) {
        let left = arr[i];
        let right = arr[len];
        if (arr[i] === num) {
            return i;
        }
       if (num < arr[i]) {
            left = arr[Math.round(len/2)];
        }
       else if (num > arr[i]) {
            right = arr[Math.round(len/2)];
        }
    }
    return -1
};

console.log(binarySearch([1,4,7,9,10,15,22,31,33,45,56,61,62,63,64,75], 62))