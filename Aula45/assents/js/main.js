//constructor function
//Na função construtora deve se usar obrigatoriamente a palavar new

function Pessoa (nome, sobrenome){
    const ID = 1234567;

    const metodoInterno = function(){

    };

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function(){
        console.log(this.nome + ' : sou um método');
    };
}
const p1 = new Pessoa('luig', 'super');//new cria um novo objeto vazio, faz o .this apontar para o objeto vazio e retorna obrigatoriamente para objeto
const p2 = new Pessoa('mario', 'super');

console.log(p1.nome);
console.log(p2.nome);
p2.metodo();