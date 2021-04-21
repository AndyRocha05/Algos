function sumArr(arr, i = 0) {
  // 1. BASE CASE
  if(i == arr.length){
    return 0
  }
  // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
  // 3. RECURSIVE CALL
  return arr[i] +sumArr(arr, i+1)
}
// [1,2,3] => 6
console.log(sumArr([1,2,3]))

function sumArr(arr, i = 0) {
  // 1. BASE CASE
  if(i == arr.length - 1){
    return arr[i]
  }
  // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT
  // i + 1
  // 3. RECURSIVE CALL
  return arr[i] + sumArr(arr, i+1)
}
// [1,2,3] => 6
console.log(sumArr([1,2,3]))
console.log(sumArr([1,2,1,2,1,2]))


function recFlatten(arr){
  // can use Array.isArray() in the base case to see if arr is actually an array
  if(Array.isArray(arr)){
    return true
  }
   else{
     return false
   }
}
console.log(recFlatten([1,2,3]))

function multiply(a, b){
  var newnum = a * b
  return newnum
}
console.log(multiply(5,10))
//  Insertion Sort//
function insertionSort(nums){
  for(let i = 1; i < nums.length; i++){
    let current = nums[i];
    let j = i-1;
    while (( j > -1) && (current< nums[j]) ){
      nums[j+1]= nums[j];
      j--;
    }
    nums[j+1]= current;
  }
    return nums;
}
nums=[5,2,9,10,11,15,12,6];
console.log(insertionSort(nums));


let sortedA = [1, 3, 3, 4, 5, 5, 5 ];
  let sortedB = [2, 3, 5, 6, 6, 7, 9 ];
function orderedMultisetUnion(sortedA, sortedB){
  



}
