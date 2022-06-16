/**
++a prefix (increase a by 1 and return )
--a prefix (decrease a by 1 and return )
a++ postfix (return a then increase a by 1)
a-- postfix (return a then decrease a by 1)

*/

// postfix 
let a=5;

// let b = a++;

// console.log(a,b);

// let c = a++ * a++ - a++;
// console.log(c,a);

// let d = a++ * c++ + c+ a;


// let  b = a++ * a-- + a++ * a-- ; 
// console.log(b,a);


// let b = ++a * a++ - ++a * a++ 
// console.log(b,a);

let b= 2;

let c = ++b*b-- - a-- + ++a -b-- +  ++b * --b *--a + a--;

console.log(c,b,a);

