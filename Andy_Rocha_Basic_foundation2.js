//Biggie Size
var arr = [-1,3,5,-5]
function word(arr){
    for (var i = 0; i < arr.length; i++) {
         if(arr[i]> 0)
         arr[i] = 'big'
    }
    console.log (arr)
}
word(arr)
//
//low and high 
var arr = [1,3,5,8,9.68,95,250,360,420]
function lowAndHight(arr){
    var min=arr[0]
    var max=arr[0]
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min=arr[i];
        }else   if(arr[i > max]){
            max =arr[i]
        }
    }  
    console.log(min)
    return max;
}
console.log 
//
//print one return another 
var numArr= [1,2,3,5,8,9]
function printReturn(numArr){
console.log (numArr[numArr.length-2]);
for(var i = 0; i < numArr.length; i++){
    if(numArr[i] % 2 != 0){
        return numArr[i];
    }
} 
}
printReturn()
console.log (numArr[i])

//Double Vision 
var arr = [1,2,3]
function double(arr){
    var ret = [];
    for (var i = 0; i < arr.length; i++) {
         ret.push(arr[i] * 2)
    }
    console.log (ret)
}
double(arr)
//
//Count Positive
var newArr=[-1,1,1,1]
var posCount =0
function countPositive(newArr){
    for(var i = 0; i < newArr.length, i++;){
    if (newArr[i] > 0) {
        posCount++;
    }
    }
    numArr[newArr.length-1] = posCount
    Return newArr
console.log (countPositive(newArr))
}
//
//
//evens and odds
function evenOdd(numArr){
    var consecEven=0;
    var consecOdd=0;
    for(var i=0; i < numArr.length; i++)
    if(numArr[i] % 2 ==0){
        consecEven++;
        consecOdd= 0;
    }else{
        consecOdd++;
        consecEven=0;
    }
    if (consecOdd== 3){
        console.log("Thats odd!")
        consecOdd=0;
    }
    }else if (consecEven == 3){
        console.log("Even more so!")
        consecEven = 0
    }
}
evenOdd()
//
//increment the seconds
 function second(numArr)
 for (var i= 0; i < numArr.length; i++){
     if(i%2 != 0){
         numArr[i]++;
     }
     console.log(numArr[i]);
 }
 return numArr
}
//
//Previous Length
function previousLenghts (stringArr){
   for (var i = stringArr.length-1; i > 0 ; i--){
       stringArr[i = stringArr[-1].length;
       return stringArr;
   }    
   previousLenghts()
}
//
// add 7
function addSeven(numArr)
 var newArr=[];
 for(var i=0; i< numArr.length; i ++){
     //var plusseven=numArr[+7;]
     newArr.push(numArr[i]+7);{
     return newArr
 }
}
//
//Reverse Area
function reverse(arr){
    for(var i=1; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i]= arr[arr.length-1-i]
        arr[arr.length-1-i]= temp
    }


    return arr;
}
///
//all Negative
function Negative(numArr)
var newArr=[]
for(var i=1; i < arr.length; i++);
{
    if(numArr[] > 0){
        newArr.push(numArr[i]* -1);
    }else{ newArr.push(numArr[i]);
    }
    return newArr;
    }
//
//always hungry
function hungry(stringArr){
    var foodFound =false
for(var i=1; i < stringArr.length; i++){
    if(stringArr[i]== "food"){
        console.log("Yummy")
        foodFound= true;
    }
}
if (!foodFound){

}
}
hungry(stringArr)
//
// swap into center
function center(arr){
    for(var i=1; i < arr.length/2; i+=2){
        var temp=arr[i];
        arr[i]= arr[arr.length-i-1]
        arr[arr.length-i-1]= temp
}
function(center)
}
//
//scale a Array
function scale (arr,num){
    for(var i=1; i < arr.length/2; i++){
        arr[i] *= num;
    return numarr;
}
console.log(scale)



