// Primitivos (imutaveis)- string, number, boolean, undefined, null  (bigint, symbol).
let nome = 'Luiz';
nome[0]='r';//tentou alterar o um index em uma vaiavel é impossivel 
console.log(nome[0], nome);
let a = 'a';
let b = a;// nesse caso b é uma copia
console.log(a,b);
a = 'outra coisa';//auterou todo o valor dentro da variavel
console.log(a,b); //não alterou b pois o b foi salvo antes da alteração de valor do a

///////////\\\\\\\\\\

// referencias são mutaveis arrey, objetos, fuction.
let a1 = [1, 2, 3];
let b1 = a1;//se houver alteração em qualquer um dos dois há uma alteração nos dois valores
console.log(a, b);
a.push(4);
console.log(a, b);
b.pop();
console.log(a, b);