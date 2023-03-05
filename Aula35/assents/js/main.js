function max(x){
    if(typeof x !== 'number') return x;
    if(x % 5 === 0 && x % 3 ===0)return 'FizzBuzz';
    if(x % 3 === 0) return "Fizz";
    if(x % 5 === 0) return 'buzz';
    return x
}
for(let i = 0; i <= 100; i++){
    console.log(i, max(i));
}