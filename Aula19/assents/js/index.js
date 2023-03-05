//avaliação de curto circuito

// && -- false && true -> retorna o primeiro valor false
console.log('joao' && 0 && 'maria');
console.log('joao' && NaN && 'maria');
console.log('joao' && null && 'maria');
console.log('joao' && 'maria');

//false, 0, '' ""(string vazia), null /undefined, NaN são numero que sempre retornam false

// || -- false || true -> retorna o valor verdadeiro
console.log(0 || NaN || null || 'marcos' || undefined || '');


