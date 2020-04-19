function getDigit (num, index) {
    return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

function digitCount (num) {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigit (arr) {
    let maxDigit = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigit = Math.max(maxDigit, digitCount(arr[i]));
    }
    return maxDigit;
}

function radixSort (nums) {
    let maxDigitCount = maxDigit(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let b = 0; b < nums.length; b++) {
            digitBuckets[getDigit(nums[b], k)].push(nums[b]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([1,5,78,25,36]));