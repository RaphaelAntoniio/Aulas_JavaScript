// let a = 'a';//b
// let b = 'b';//c
// let c = 'c';//a
// const numero = [1, 2, 3]
// [a, b, c] = numero;// atribuição por desestruturação

//                  0          1          2
//               0  1  2    0  1  2    0  1  2
const numero = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const[,[,,seis]]= numero;
console.log(seis);
const [listaUm, listaDois, listaTres] = numero;
console.log(listaTres[2]);//nove
//////////////\\\\\\\\\\\\\\
const pessoa = {
    nome: 'luiz',
    sobreNome: 'Miranda',
    idade: 25,
    endereço:{
        rua: 'Av.Brasil',
        cidade: 'Rio de Janeiro-RJ',
        numero: 320
    }
}

const { nome, sobreNome } = pessoa;
console.log(nome, sobreNome);
