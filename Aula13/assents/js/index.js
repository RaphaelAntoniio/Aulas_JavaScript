//function cria uma função segue as mesmas regras de uma variavel
function saudacao(nome){// nome é uma parametro
console.log(`Bom Dia! ${nome    }`);
return 123141;
}
//para chamar uma função deve se por os parenteses
saudacao('Luiz');//quando se chama a função voce pode dar o valor do parametro dentro dos parenteses (...)
//podendo ser executad quantas vezes necessario e o valor mudado tantas vezes quanto
function soma(x, y){
    const resultado = x + y;// tudo dentro de uma function esta protegindo
    return resultado;// tudo abaixo de um return em uma função não é executado
    console.log('ola mundo!');
}
console.log (soma(2, 2));
////////\\\\\\
let raiz = function(n){
    return Math.sqrt(n, 2);

};
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
//um outro jeito de chamar um fuction é com arrow function = =>
let raiz2 = (n) =>{
    return Math.sqrt(n, 2);

};
console.log(raiz2(9));
console.log(raiz2(16));
console.log(raiz2(25));
