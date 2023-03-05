//array
// em um array o indice funciona diferente, eles são indexados por elemento.
//                0        1        2
const alunos= ['maria', 'joao', 'marcos'];
console.log(alunos[2]);

//tambem é possivel editar um array
alunos[0]= 'eduardo'
console.log(alunos);

//como tambem é possivel criar um idice
alunos[3]= 'luiza';
console.log(alunos);

//.length mostra o tamanho do array
console.log(alunos.length);
//o .length tambem ajuda adicionar ao ultimo indice
alunos[alunos.length]='marcos'
alunos[alunos.length]='pedro'
alunos[alunos.length]='joao'
alunos[alunos.length]='paulo'
console.log(alunos);

//.push tambem adiciona ao final
alunos.push('otavio');
console.log(alunos);

//.unShift() adiciona no começo do array
alunos.unshift('marcos');
console.log (alunos)

//.pop() remove elementos do final do array
alunos.pop()
console.log(alunos)
//tambem é possivel salvar em outra variavel
console.log(alunos);
let removido = alunos.pop();
console.log(removido);

//.shift() segue a ideia do .pop() porem removendo do começo do array.
alunos.shift();
console.log(alunos);
removidoComeco=alunos.shift();
console.log(removidoComeco);

//typeof de um array é object
//instanceof Array, pegunta se é um array com resposta de true ou false
console.log(alunos instanceof Array);