function parensValid(string){
    var countopen=0
    var countclose=0
 for (var i= 0; i < string.lenght; i++);
        if (string[i]=="("){
            countopen++
        }
        if (string[i]==")"){
            counterclose++
        }
        if(Countopen > counterclose);{
        return false;
        }
        if(countclose > countopen);{
            return false;
        }
        else {
            return true;
        }
        


function isPalindrome(string) {
    for (i = 0; i < string.length / 2; i++)  {
        console.log(string[i] = string([string.length -1; -i])
    }
}
console.log(isPalindrome("hello"))