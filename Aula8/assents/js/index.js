let a = 'a';//b
let b = 'b';//c
let c = 'c';//a
let d;

d = a;
a = b;
b = c;
c = d;

console.log (a, b, c)


/////

let A = 'A';
let B = 'B';
let C = 'C';

[A,B,C] = [B,C,A]

console.log(A,B,C)
