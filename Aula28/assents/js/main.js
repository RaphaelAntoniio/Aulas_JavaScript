
const frutas = ['pera', 'maca', 'uva', 'banana', 'melancia'];
for(let i = 0; i < frutas.length; i++){//ele le os indices no array
    console.log(frutas[i]);
}
for(let i in frutas){//ele le o objetos no array
    console.log(frutas[i])
}
let pessoa ={
    nome:'Luiz',
    sobreNome:'moreira',
    idade:'23',
};
for(chave in pessoa){
    console.log(chave, pessoa[chave]);
}