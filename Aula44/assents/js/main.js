// function factory
function criaPessoa(nome, sobreNome, altura, peso){

    return{

        nome,

        sobreNome,
        //getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobreNome}`
        },

        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobreNome = valor.join(' ')
        },
        
        fala: function(assunto){
            return `${this.peso} esta ${assunto}.`;
        },

        altura,

        peso,

        get imc(){
            const indice = this.peso / (this.altura**2);
            return indice.toFixed(2)
        }

    };
}
const p1 = criaPessoa('Otavio', 'miranda',1.80, 80);
p1.nomeCompleto = 'Marcos Paulo Silva';
console.log(p1.nomeCompleto);
console.log(p1.imc);
// const p2 = criaPessoa('Marcia', 'mesquita', 1.60, 50);
// console.log(p2.imc());