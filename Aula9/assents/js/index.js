// aspas duplas devem ser usadas dentro de aspas simples e acento, para escapar se deve usar barras invertidas.
//strings são indexidas sendo cada caracter um numero começando do 0 exemplo se deve usar o charAt para puxar a string
let alfabeto='abcdefghijklmnopqrstuvxwyz';
console.log(alfabeto[22]);
console.log(alfabeto[0]);
console.log(alfabeto.charAt(12));
// .concat concatena uma string com outra
console.log(alfabeto.concat(' esse é o alfabeto'));
//.indexOf mostra em qual indice esta o caracter
console.log(alfabeto.indexOf('r'));
//.lateIndexOf indica o indice de trás para frente
console.log(alfabeto.lastIndexOf('r'));
//.replace substitue oque voce quer
console.log(`o alfabeto tem ${alfabeto.replace('abcdefghijklmnopqrstuvxwyz', '26 letras')}`)
//.length mostra quantos indices tem uma tring
console.log(alfabeto.length);
//.slice pega apartir de um ponto especifico da string ate outro ponto caso use um numero negativo ele ira pegar todos os indices de trás para frente
console.log(alfabeto.slice(0, 18));//a ao r
console.log(alfabeto.slice(-9));// r ao z
//.slipt retira um caracter de seu arrei
console.log(alfabeto.split('acdfghijklmnopqstuvxwyz'));// B E R
//.toUppercase deixa em maiusculo e .toLowerCase em minusculo
console.log(alfabeto.toUpperCase);