const nome = 'luiz';
function falanome(){//a função vai procurar a variavel, partindo do proprio escobo ate o escobo global
    console.log(nome);
}
function usaFalaNome(){
    falanome();//a mesma coisa serve para uma função que chama outras funções
}
usaFalaNome();
////////////////////////////
function retornaOutraFuncao(){
    const nome1 = 'Marco';
    return function(){
        return nome1;//essa função tem acesso a tres escopos o dela, da mae dela e o global
    };

}
const funcao = retornaOutraFuncao();
console.log(funcao());