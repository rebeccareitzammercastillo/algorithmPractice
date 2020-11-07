// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Solution #1
function reverse(str) {
    var newstr='';
    for(var i=str.length-1; i>=0; i--){
        newstr+=(str[i]);
    }
    return newstr;
}
reverse('hello');
// module.exports = reverse;

// Solution #2
function reverse(str){
    return str
    .split('')
    .reverse()
    .join('');
}


// Solution #3
function reverse(str){
    let reversed= '';
    
    for(let character of str){
        reversed= character +reversed;
    }
    return reversed
}


// Solution #4
function reverse(str){
    return str.split('').reduce((reversed,character)=>
        character + reversed
    ,'');
}

