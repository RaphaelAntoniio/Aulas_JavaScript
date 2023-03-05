function meuEscopo () {
    const form = document.querySelector('form');
    const pessoas = [];
    const resultado = document.querySelector('.resultado');

    function recebeevemtoform(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobreNome= form.querySelector('.sobreNome');
        const peso= form.querySelector('.peso');
        const altura= form.querySelector('.altura');
        
        pessoas.push([nome.value, sobreNome.value, peso.value, altura.value]);

        resultado.innerHTML = pessoas.map(p => `Nome: ${p[0]} ${p[1]}<br>Peso: ${p[2]}<br>Altura: ${p[3]}<br><br>`).join('');
        console.log(pessoas)
    }

    form.addEventListener('submit', recebeevemtoform);

}
meuEscopo();
