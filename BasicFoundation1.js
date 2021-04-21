// get 1 to 255//
function array() {
  var x = [];
  for (var i = 1; i < 256; i++) {
    x.push(i);
  }
  console.log(x);
}
array();
//
//Get even 1000//
function sumEven() {
  var sum = 0;
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 == 0) sum = sum + i;
  }
  console.log(sum);
}
sumEven();
//
//Get odd 5000//
function sumOdd() {
  var sum = 0;
  for (var i = 0; i <= 5000; i++) {
    if (i % 2 == 1) sum = sum + i;
  }
  console.log(sum);
}
sumOdd();
//
//Iterate an array//
var a = [1, 2, 5];
var b = [-5, 2, 5, 12];
function addArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(addArray(a)); //8
console.log(addArray(b)); //14
//
//Find Max//
function findMax(arr) {
  var arr = [-3, 3, 5, 7];
  var max = Math.max.apply(null, arr);
  console.log(max);
}
findMax();
//
//find average//
var arr = [1, 3, 5, 7, 20];
sum = 0;
function findAvg() {
  for (i = 0; i < arr.length; i++)
  sum += arr[i];
  avg = sum / arr.length;
  console.log(avg);
}
findAvg();
//
//array odd//
function arrayOdd() {
  var x = [];
  for (var i = 0; i <= 50; i++) {
    if (i % 2 == 1) x.push(i);
  }
  console.log(x);
}
arrayOdd();
//
//Greater than y//
var arr = [1, 3, 5, 7];
var y = 3;
function Greater(arr, y) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > y) 
    {
        count++;
    }
  }
  //console.log(count)
  return count
}
var answer= Greater(arr, y);
console.log(answer)
//
//Square//
var arr = [1,5,10,-2]
function square(arr){
    var ret = [];
    for (var i = 0; i < arr.length; i++) {
         ret.push(arr[i] * arr[i])
    }
    console.log (ret)
}
square(arr)
//
//Negative  
var arr = [1,5,10,-2]
function Neg(arr){
    for (var i = 0; i < arr.length; i++) {
         if(arr[i]< 0)
         arr[i] = 0
    }
    console.log (arr)
}
Neg(arr)
//  
//MaxMinAvg
var arr = [1,5,10,-2]
function maxMinAvg(arr) {
    var newArr =[];
    var sum = 0;
    arr.forEach(function(elem){
        sum += elem;
    });
    newArr.push(Math.max.apply(null,arr));
    newArr.push(Math.min.apply(null,arr));
    newArr.push(sum/arr.length);
    console.log(newArr)
}
maxMinAvg(arr)
//
//Swap Values//
var arr = [1,5,10,-2];
var x = arr.length;
function swap(arr){ 
    for(var i = 0; i < x/2; i++) {
        var temp = arr[i]; 
        arr[i] = arr[x-i-1];
        arr[x-i-1] = temp;
    }

    console.log(arr)
}
swap(arr)
//
//Number to string
var arr = [-1,-3,2]
function word(arr){
    for (var i = 0; i < arr.length; i++) {
         if(arr[i]< 0)
         arr[i] = 'Dojo'
    }
    console.log (arr)
}
word(arr)
