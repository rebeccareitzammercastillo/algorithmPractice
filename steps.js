// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//solution #1
function steps(n) {
    for (var r=0; r<n; r++){
        let stair='';
        for(var c=0; c<n; c++){
            if(r>=c){
                stair+= '#';
            }else{
            stair+=' ';
            }
        }
        console.log(stair);
    }
}
console.log(steps(7));

//solution #2 w/recursion
function steps(n, row= 0, stair= '') {
    if (n===row){
        return;
    }

    if(n === stair.length){
        console.log(stair);
        return steps(n, row+1);
    }

    if (stair.length<= row){
        stair+= '#';
    }else{
        stair+= ' ';
    }
    steps(n, row, stair);
}

console.log(steps(7));
