//getter -- setters

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;


    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: () => estoque,
        set: function(valor){
            if (value < 0){
                console.log('nao existe');
            }return valor
        }
    });
};
const p1 = new Produto('camiseta', 20, -1);
console.log(p1.estoque.valor)