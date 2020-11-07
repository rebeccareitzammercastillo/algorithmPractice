// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var charMap={};
    var max= 0;
    var mChar='';
    
    for (let char of str){
        if(!charMap[char]){
            charMap[char]=1
        }
        else{
            charMap[char]++
        }
    }
    console.log(charMap)
    for (let char in charMap){
        if(charMap[char]>max){
        max=charMap[char];
        mChar=char;
        } 
    } 
    return mChar;
}

console.log(maxChar('Hello There!'))
