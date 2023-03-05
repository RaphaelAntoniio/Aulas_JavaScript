//return
//retorna uma função
//termina uma função
function soma(a, b){
return a,b;
}
console.log(5,2);
////////////////
// document.addEventListener('click', function(){// uma função que nao retona nada mas adiciona um valor no caso o valor seria a cor do background
//     document.body.style.backgroundColor = 'red';
// });
////////////////
function criaPessoa(nome, sobreNome){
    return {nome, sobreNome}//uma função que retonar nome e sobreNome em forma de objetos facilintando depois a incerção em uma variavel
}
const p1 = criaPessoa('luiz', 'oliveira');
const p2 ={
    nome: 'luiz',
    sobreNome: 'oliveira'
};
console.log(p1, p2);
////////////////
function falaFrase(comeco){
    function falaResto (resto){
        return comeco + ' ' + resto;// esse retorno é da função 'falaResto'
    } 
    return falaResto;//esse retorno é da função "falaFrase", este retorna para 'falaResto' sem a executar, oque quer dizer que esta retornando a função em si
}
const olaMundo = falaFrase('ola')
console.log(olaMundo('Mundo!'));
////////////////
// function dublica(n){
//     return n * 2;
// }
// function triblica(n){
//     return n * 3;
// }
// function quadriblica(n){
//     return n * 4;
// }
function criaMultiplicador(multiplicador){
    return function(n){
        return n*multiplicador;
    };
}
const dublica = criaMultiplicador(2);
const triblica = criaMultiplicador(3);
const quadriblica = criaMultiplicador(4);
console.log(dublica(2));
console.log(triblica(3));
console.log(quadriblica(4));
