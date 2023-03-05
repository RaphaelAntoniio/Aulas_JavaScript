// const produto = { nome:'Caneca', preco: 2.80};
// const outraCoisa = {...produto}//'...'  rest operetor

// outraCoisa.nome = 'pessoas';

// console.log(produto.nome);
// console.log(outraCoisa.nome);
////////\\\\\\\\\\

// const produto = { nome:'Caneca', preco: 2.80};
// const outraCoisa = Object.assign({}, produto, {materia:porcelana});//object.assign traz para dentro

// outraCoisa.nome = 'pessoas';

// console.log(produto.nome);
// console.log(outraCoisa.nome);

////////\\\\\\\\\\\\

// const produto = { nome:'Caneca', preco: 2.80};
// const outraCoisa = {nome: produto.nome, preco:produto.preco};//criando um novo obj do zero

// outraCoisa.nome = 'pessoas';

// console.log(produto.nome);
// console.log(outraCoisa.nome);

///////////////\\\\\\\\\\\\
// const produto = { nome:'Caneca', preco: 2.80};
// const outraCoisa = Object.assign({}, produto, {materia:porcelana});

// outraCoisa.nome = 'pessoas';

// console.log(Object.keys(produto));//transforma objeto em array
// console.log(outraCoisa.nome);

//////////////\\\\\\\\\\\\\\

// const produto = { nome:'Caneca', preco: 2.80};
// const outraCoisa = Object.assign({}, produto, {materia:porcelana});//object.assign traz para dentro

// Object.freeze(produto);// .freeze impede alterações no obj
// outraCoisa.nome = 'pessoas';

// console.log(produto.nome);
// console.log(outraCoisa.nome);

////////\\\\\\\\\\\

// const produto = { nome:'Caneca', preco: 2.80};

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));//pede as propriedades de configurações do obj

///////////\\\\\\\\\

const produto = { nome:'Caneca', preco: 2.80};

