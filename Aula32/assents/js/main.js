
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros ){
        if(numero === 2){
            console.log('aqui esta o dois')
            continue;//assim ele checa a condição e se a condição for true ele continua se não volta ao principio do for.
        }

        console.log(numero);
        
        if(numero === 7){
            console.log(`7 encontrado saindo`);
            break;//o break faz o codigo sair do laço quando executado
        }
}