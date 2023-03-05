// deffineProperty - deffineProperties

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,//mostra a chave
        value: estoque,//é o valor da chave
        writable: false,//pode alterar o valor
        configurable: false//pode reconfigurar a chave
    });
    Object.defineProperties(this,{
        nome: {
            enumerable: true,//mostra a chave
            value: estoque,//é o valor da chave
            writable: false,//pode alterar o valor
            configurable: false//pode reconfigurar a chave    
        },
        preco:{
            enumerable: true,//mostra a chave
            value: estoque,//é o valor da chave
            writable: false,//pode alterar o valor
            configurable: false//pode reconfigurar a chave
    
        }
    });
};
const p1 = new Produto('camiseta', 20, 3);
console.log(p1)