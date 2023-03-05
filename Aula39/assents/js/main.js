//funçao escrita com a palavra funciton tem um argumento especial chamado arguments que sustenta todos os argumentos dentro dela
function funcao(){
 console.log(arguments);
}
funcao('oie');
/////////////////////////////////////
function soma(a, b = 2){//voce retorna o valor de b caso b não tenha valor
    console.log(a + b);//voce esta retornando a soma de a e b
}
soma (2, 4);//aqui voce esta dando valor ao a e b.
/////////////////////////////////////
function soma1(a, b = 2, c=10){
    console.log(a + b +c);//voce esta retornando a soma de a e b e c
}
soma1 (2, undefined, 20);//para assumir o valor padrão deve ser enviado undefined como valor
/////////////////////////////////////
function destruturacao([valor1, valor2, valo3]){
    console.log(valor1, valor2, valo3);//voce esta retornando o valor que sera nomeado posteriormente
}
destruturacao(['luiz', 'miranda', '30']);//neste caso voce esta tratando como desestruturação podendo ser dedes um obj ate um array