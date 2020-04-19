const merge = (arr1, arr2) => {
    let result = [];
    for (let i = 0; i < arr1.length && arr2.length; i++) {
        while (arr1[i] < arr2[i]) {
            result.push(arr1[i]);
            arr1.shift();
        }
        while (arr1[i] > arr2[i]) {
            
            result.push(arr2[i]);
            arr2.shift();
            i--
        }
        if (arr1.length === 0) {
            result = result.concat(arr2); 
        }
        else if (arr2.length === 0) {
            result = result.concat(arr1);
        }
    }
    return result;
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let halfwayThrough = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, halfwayThrough)) ;
    let right = mergeSort(arr.slice(halfwayThrough));
    return merge(left, right);
};

console.log(mergeSort([3,5,18,9,45,24,56,25]));
