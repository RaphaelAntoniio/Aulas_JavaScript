const numero = Number(prompt('Digite um Numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto0 = document.getElementById('texto0')
const texto1 = document.getElementById('texto1')
const texto2 = document.getElementById('texto2')
const texto3 = document.getElementById('texto3')
const texto4 = document.getElementById('texto4')
const texto5 = document.getElementById('texto5')
const texto6 = document.getElementById('texto6')

numeroTitulo.innerHTML = numero;
texto0.innerHTML = `<p><b>seu numero é ${numero}</b> </p>`;
texto1.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)} </p>`;
texto2.innerHTML = `<p>${numero} É inteiro: ${Number.isInteger(numero)} </p>`;
texto3.innerHTML = `<p>É NaN ${Number.isNaN(numero)} </p>`;
texto4.innerHTML = `<p>Aredondado para cima é:  ${Math.ceil(numero)} </p>`;
texto5.innerHTML = `<p>Aredondado para baixo é: ${Math.floor(numero)} </p>`;
texto6.innerHTML = `<p>Com duas casas decimais  é: ${numero.toFixed(2)} </p>`;