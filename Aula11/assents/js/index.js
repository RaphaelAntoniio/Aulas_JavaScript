//Math.floor() arredonda para baixo
let num1 = 2.1231;
let num2 = Math.floor(num1)
console.log(num1);
console.log(num2);

//Math.ceil() arredonda para cima
num2 = Math.ceil(num1);
console.log(num2);

//Math.round() arredonda 0.5 ou mais ara cima 0.5 ou menos baixo
num2 = Math.round(num1);
console.log(num2);

//Math.max() acha qual o maior numero de uma sequencia de números
console.log(Math.max(1,2,3,4,5,6,7,8,9,10));

//Math.min() acha o menor numero de uma sequencia
console.log(Math.min(2,4,6,8,10));

//Math.random() gera um numero aleatorio entre 0 1
console.log(Math.random());
// para se pegar um numero aletorio entre uma sequencia deve se fazer
const aleatorio = Math.random() *(10 - 5) + 5;
console.log(aleatorio);
//envolva o Math.random() em Math.round() para retirar as casas decimais
const aleatorio2 = Math.round(Math.random() *(10 - 5) + 5);
console.log(aleatorio2);

//Math.PI entrega o numero de pi
console.log(Math.PI);


