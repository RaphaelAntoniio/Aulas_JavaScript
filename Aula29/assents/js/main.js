const nome = ['luiz', 'MARCOS', 'ANTONIO'];


console.log('  ');
console.log('#####');
console.log('  ');

for ( let i = 0; i< nome.length; i++){//for clasico apenas para literais (arrays ou string)
   console.log(nome[i]);
}

console.log('  ');
console.log('#####');
console.log('  ');

for(let i in nome){//for in para todos
   console.log(nome[i]);
}

console.log('  ');
console.log('#####');
console.log('  ');

for (let valor of nome){//for of para arrays ou strings
    console.log(valor);
}

console.log('  ');
console.log('#####');
console.log('  ');



