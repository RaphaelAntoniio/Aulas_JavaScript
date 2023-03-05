//herança

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;     
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}; 
function Camiseta (nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (this.preco / 100));
};
function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperties(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
    
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
Caneca.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (this.preco / 100));
};
Caneca.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (this.preco / 100));
};


const produto = new Produto('gen', 111);
const camiseta = new Camiseta('regata', 7.5, 'Preta');
const caneca = new Caneca('caneca', 9, 'porcelana', 0);
console.log (produto);
camiseta.aumento(10);
console.log(camiseta);
console.log(caneca);