// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// EX. "Happy New Years" => "HNY"
// NOTE. YOU CAN USE .SPLIT() METHOD
var strName = "Edward Im"
var stringArr = strName.split(" ")
// ["Edward", "Im"]
function acronyms(string){
    var stringArr=string.split(".")
    var newstring=""
    for(var i = 0; i<stringArr.length; i++){
        newstring += stringArr[i[0]]
        //console.log(stringArr[i][0])
        return newstring
    }

}
acronyms("Live From Saturday Night Live")
// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
// NOTE. RETURN A NEW STRING
function stringReverse(string){
var newString=""
for(var i=string.length-1; i >= 0; i--){
    newString += string[i]
}
return newString
}
console.log(stringReverse('Hello'))


// THUR
function bookIndex(array) {
    for(var i = 0; i < array.length; i++)
    var newarray=[]
    while (array[i]=array[i]+1)
        do array
        newarray.push[i]
    while (array[i]=array[i]+1)
        
        

}
console.log(bookIndex([1,13,14,15,16,17,36,37,38,70]))
// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,13,14,15,16,17,36,37,38,70] => ["1", "13-17", "36-38", "70"]

function join(arr, separator) {
    for(var i = 0; i < arr.length ; i++)
    return (arr.join("-"))
}
console.log(join([1,2,3]))
// Given an arr and a separator string, output a string of every item in the array separated by the separator.
// EX. [1,2,3] , ", " => "1, 2, 3"
// EX. [1,2,3] , "-" => "1-2-3"
// EX. [1] , "-" => "1"
// EX. [], "," => ""
function frequencyTable(arr){
    // var obj = {}
    // obj.hasOwnProperty("key_Name")
  
  }
  // EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
  // EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
  /* 
    Reverse Word Order
    Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
    .split()
  */
  function reverseWordOrder(string){
  
  }
  // EX. "THIS IS A TEST" => "TEST A IS THIS"
  function frequencyTable(arr){
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    for(var i = 0; i<arr.length; i++){
        if arr[i]= a
        a++
        if arr[i]= b
        b++
        if arr[i]= c
        c++
        if arr[i]= d
        d++
    }
    return arr

    // obj.hasOwnProperty("key_Name")
}
console.log(frequencyTable(['A','A','B','C','C','C','D','D']))
console.log(frequencyTable(['A','C','C','C','D','D','A','B']))


function reverseWordOrder(string){
    var stringArray = string.split('.')
    var newString=""
    for(var i=stringArray.length-1; i >= 0; i--){
        newString += stringArray[i]
    return newString
    }
  console.log(reverseWordOrder("THIS IS A TEST"))


  var x = "Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Double,Double,Double"
x = Array.from(new Set(x.split(','))).toString();
console.log(x)


function dedupeString(string){
    string= Array.from(new Set(string.split(''))).toString();
     return string
  }
  
  console.log(dedupeString("aabacecbedd")) // => "abced" 
  // EX. "bbbbaaaaffff" => "baf"

