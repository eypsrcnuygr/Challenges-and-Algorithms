const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
            if (min !== i) swap(arr, i, min);
        }
    }
    return arr;
}

const swap = (arr, idx1, idx2) => {
    return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

console.log(selectionSort([3,5,97,25,68,36,44,13,78,987,636,36,47,97,99,13]));
