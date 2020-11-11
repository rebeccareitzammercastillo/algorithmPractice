// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// solution #1
function vowels(str) {
    let vow=0
    for(let char of str.toLowerCase()){
        if(char==='a'){
            vow+=1;
        }
        if(char==='e'){
            vow+=1;
        }
        if(char==='i'){
            vow+=1;
        }
        if(char==='o'){
            vow+=1;
        }
        if(char==='u'){
    vow+=1;
        }
    }
    return vow
}
console.log(vowels('Why do you ask?'));

// solution #2
function vowels(str) {
    let count=0
    const vow= "['a','e','i','o','u']"
    for(let char of str.toLowerCase()){
        if(vow.includes(char)){
            count++
        }
    }
    return count
}
console.log(vowels('Why do you ask?'));

// solution #3
function vowels(str) {
    const matches=str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;

}
console.log(vowels('Why do you ask?'));