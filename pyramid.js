// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//solution #1
function pyramid(n) {
    const midpoint= Math.floor((2*n-1)/2)
    for (var r=0; r<n; r++){
        let level='';
        for(var c=0; c<n*2-1; c++){
            if(midpoint-r<= c && midpoint + r >= c){
                level += '#';
            }else{
                level += ' ';
            }
        }
        console.log(level);
    }
}
console.log(pyramid(4));

//solution #2 w/recursion
function pyramid(n, row=0, level='') {
    if (n===row){
        return;
    }

    if(level.length === 2*n-1){
        console.log(level);
        return pyramid(n, row+1);
    }
    const midpoint= Math.floor((2*n-1)/2)
    let add;
    if (midpoint-row<= level.length && midpoint + row >= level.length){
        add= '#';
    }else{
        add= ' ';
    }
    pyramid(n, row, level+add);
}
console.log(pyramid(4));
