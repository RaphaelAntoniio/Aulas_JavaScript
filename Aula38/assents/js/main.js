// Declaração de função  (function hosting)
// onde chamar ela não faz diferença, voce pode chamala antes ou depois de declarar
falaOi();
function falaOi(){
    console.log('OI');
}

// funções são objetosde primeira classe ou seja pode ser tratado como dado

const souUmDaDo = function(){
    console.log('Sou um dado');
};

function ola (funcao){
    funcao()
};
ola(souUmDaDo);
// ARROW FUNCTION é uma expreção de funçao
const funcaoArrow = () =>{ console.log('Sou uma Arrow');};
funcaoArrow();
// dentro de um oobjeto pode se ter uma função
const objeto = {
    falar(){
        console.log('estou falando')
    }
}