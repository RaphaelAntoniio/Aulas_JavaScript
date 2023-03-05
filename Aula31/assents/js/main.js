//while ,,,, DO while

const nome = 'luiz';

let i = 0;

while(i < nome.length){
 console.log(nome[i]);
 i++;
}

console.log(' ');
console.log('¨¨¨¨¨¨¨¨¨¨¨¨¨');
console.log(' ');

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(min, max);

while(rand !== 10){// while executa o codigo enquanto a condição for false
    rand = random(max, min);
    console.log(rand)
}

console.log(' ');
console.log('¨¨¨¨¨¨¨¨¨¨¨¨¨');
console.log(' ');

do{//do wile executa primeiro co codigo depois verifica se a condição é true or false
    rand = random(max, min);
    console.log(rand)
}while(rand !== 35);
