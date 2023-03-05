// function meuEscobo(){
//     const form = document.querySelector('form');
//     const dados = [];
//     const resultado = document.querySelector('.resultado');
    
//     function recebeForm(evento){
//         evento.preventDefault();
//         const peso = form.querySelector('#peso');
//         const altura = form.querySelector('#altura');
//         dados.push([peso.value, altura.value]);
//         let pesoCalculo = parseFloat(dados[0][0]);
//         let alturaCalculo = parseFloat(dados[0][1]);
//         let imcCalculo = (pesoCalculo + alturaCalculo+Math.abs(pesoCalculo- alturaCalculo))/2;


//         if(isNaN(pesoCalculo) || isNaN(alturaCalculo) || pesoCalculo <= 0 || alturaCalculo <= 0) {
//             resultado.innerHTML = `Peso ou Altura inválidos`;
//             return;
//         }
//         resultado.innerHTML = `O Maior numero é ${imcCalculo}`;
      
//     }
    
//     form.addEventListener('submit', recebeForm);
//     return
//   }
//   meuEscobo();

////////////////////\\\\\\\\\\\\\\\\\

function max(x, y){
    if (x > y){
        return x;
    }
    else{
        return y;
    }
}
console.log(max(10, 2));

/////////////////\\\\\\\\\\\\\\\

function max(x, y){
    if (x>y)return x;
    return y
}
console.log(max(1, 20));

////////////////\\\\\\\\\\\\

function max(x, y){
    return x > y ? x : y;
}
console.log(max(44, 33));

//////////////\\\\\\\\\\\\\

const max2 = (x, y) =>{
    return x > y ? x : y
};
console.log(max2(55, 66));

//////////////\\\\\\\\\\\\\

const max3 = (x, y) => x > y ? x : y

console.log(max3(110, 130));
