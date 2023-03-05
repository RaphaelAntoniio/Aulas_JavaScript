// tratamento de erro


//console.log(naoExisto);


//                     Arquivo onde esta o erro                                       linha do erro
// c:\Users\rapha\OneDrive\Documentos\AulaCsharp\Aulas_Java\Aula36\assents\js\main.js:4


//   linha especifica do erro

// console.log(naoExisto);


//          Referencia do erro

// ReferenceError: naoExisto is not defined


//             stack trace do erro

//     at Object.<anonymous> (c:\Users\rapha\OneDrive\Documentos\AulaCsharp\Aulas_Java\Aula36\assents\js\main.js:4:13)
//     at Module._compile (node:internal/modules/cjs/loader:1218:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1272:10)
//     at Module.load (node:internal/modules/cjs/loader:1081:32)
//     at Module._load (node:internal/modules/cjs/loader:922:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47

// Node.js v18.13.0


// try{//verifica se te um erro e manda para 'catch'
//     console.log(naoExisto);
// }catch(err){//'tenta executar uma solução'
//     console.log('nao exito não existe');
// }

// function soma(x, y){
//     if(typeof x !=='number'|| typeof y !== 'number'){
//         throw('x e y precisam de numeros.');
//     }
//     return x + y;
// }
// console.log(soma(1, 2));
// try{
// console.log(soma('1', 2));
// }catch(error){
//     console.log(error);
// }

// try{
//     //executado quando não existe erros
// }catch(e){
//     //executado quando existe erros
// } finally{
//     // Sem executado
// }

function retonaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('esperoando instancia de Date');
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false

    });
}
try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retonaHora();
    console.log(hora);
}catch(e){
// Tratar erro
}finally{
    console.log('tenha um bom dia')
}
