function greeting(){
    return "Hello"; // returns hello
    console.log("World");// does nothing
}
var word = greeting();
console.log(word);

// returns hello 

function add(num1, num2){
    console.log("Summing Numbers!");// logs summing numbers 
    console.log("num1 is: " + num1);// logs first set or number 3,5
    console.log("num2 is: " + num2);// logs second set of numbers 4,7
    var sum = num1 + num2;// adds number (3,5) and (4,7)
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);// logs 8
console.log(result2);//logs 11

//returns summing numbers!, 3,5, summing numbers!,4,7,8,11

function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}//num has no value does nothing 