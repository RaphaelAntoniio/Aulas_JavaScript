const numero = [5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];

function callbackFilter(valor){
    return valor > 10
}

const numerosFiltrados = numero.filter(valor => valor > 10);
console.log(numerosFiltrados);
////////\\\\\\\\
const pessoas = [
    {nome: 'Luiz', idade:62},
    {nome: 'maria', idade:23},
    {nome: 'eduardo', idade:55},
    {nome: 'Leticia', idade:19},
    {nome: 'bianca', idade:32},
    {nome: 'marcos', idade:57},

]
const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >=5);
const pessoasComMaisDeCinquenta = pessoas.filter(obj => obj.idade > 50);
const pessoasQueTreminaComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
console.log(pessoasNomeGrande);
console.log(pessoasComMaisDeCinquenta);
console.log(pessoasQueTreminaComA);
