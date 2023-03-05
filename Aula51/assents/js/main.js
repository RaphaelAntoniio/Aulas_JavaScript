const numero = [5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];
const total = numero.reduce(function(acumulador, valor,){
    acumulador+=valor;
    return acumulador
},0);
console.log(total);
