// for
// for (let i = 0; i <= 10; i++) {
// console.log(i);
// }
// const indice = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis'];

// for(let i = 0; i< indice.length; i++){
//     console.log(`indice.${i}-`+indice[i]);
// }
const elementos = [
{tag: 'p', texto: 'frase 1'},
{tag: 'div', texto: 'frase 2'},
{tag: 'footer', texto: 'frase 3'},
{tag: 'section', texto: 'frase 4'},
];
const container = document.querySelector('.container');
const div = document.createElement('div');
for (let i = 0; i < elementos.length; i++) {
const {tag, texto} = elementos[i];
let tagCriada = document.createElement(tag);
tagCriada.innerHTML = texto;
div.appendChild(tagCriada)
}
container.appendChild(div);
