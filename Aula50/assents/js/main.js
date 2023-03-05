const numero = [5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];
const numerosEmDobro = numero.map(valor=>valor*2);
console.log(numerosEmDobro);
const pessoas = [
    {nome: 'Luiz', idade:62},
    {nome: 'maria', idade:23},
    {nome: 'eduardo', idade:55},
    {nome: 'Leticia', idade:19},
    {nome: 'bianca', idade:32},
    {nome: 'marcos', idade:57},

]
const pessoas1= pessoas.map(obj => obj.nome);
console.log(pessoas1);
const idades = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades);

const comIds = pessoas.map(function (obj, indice) {
    obj.id = indice;
    return obj;
});
console.log(comIds);