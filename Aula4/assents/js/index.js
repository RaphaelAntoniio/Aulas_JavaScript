//const é uma vatiavel constante então segue as mesmas regras de um let
/*não se pode declarar uma const sem declarar o valor dela
*ERRADO const nome;
*console.log =('nome');
* CERTO const nome='joao';
*console.log = ('joao');*/
const primeiroNumero = 5;// sem aspas um numero é um number
const segundoNumero = '10';// com aspas um numero se torna uma string
const conta = primeiroNumero * segundoNumero;
const resultadoDuplicado = conta * 2;
console.log('A Conta de', 5, '*', 10, 'é =', conta);
console.log('se duplicar da', resultadoDuplicado);
let resultadoTriplicado = resultadoDuplicado + conta;
console.log(resultadoTriplicado);
resultadoTriplicado += conta;
console.log(resultadoTriplicado);
console.log(typeof primeiroNumero);
console.log(typeof segundoNumero);