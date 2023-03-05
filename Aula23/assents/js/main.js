// const tresHoras = 60 * 60 * 3 * 1000;
// const data = new Date(0 + tresHoras);
// console.log(data.toString());
/////////////////\\\\\\\\\\\\\\
// const data = new Date()
// console.log('dia', data.getDate());
// console.log('mês', data.getMonth());
// console.log('ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Segudos', data.getSeconds());
// console.log('Mili-segundos', data.getMilliseconds());
// console.log('dia da semana', data.getDay());
// console.log(data);
////////////////\\\\\\\\\\\\\\\\\\
function zeroAEsqueda(num){
    return num >= 10 ? num : `0${num}`;
}
function formataData(data){
const dia = zeroAEsqueda(data.getDate());
const mes = zeroAEsqueda(data.getMonth());
const ano = zeroAEsqueda(data.getFullYear());
const hora = zeroAEsqueda(data.getHours());
const minutos = zeroAEsqueda(data.getMinutes());
const segundos = zeroAEsqueda(data.getSeconds());
return `${dia}/${mes}/${ano}  ${hora}:${minutos}:${segundos}`
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)