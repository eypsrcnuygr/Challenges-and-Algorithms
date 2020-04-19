function maxSubarraySum(arr, num){
   let max = 0;
   let temp = 0;
   if(num > arr.length) {
    return null;
}
   for(let i = 0; i < num; i++) {
       max += arr[i];
   }
   temp = max;
   for (let i =num; i < arr.length; i++) {
       
       temp = temp - arr[i - num] + arr[i];
       max = Math.max(temp,max);
   }
   return max;
  }

  console.log(maxSubarraySum([1,2,3,4,5], 4))