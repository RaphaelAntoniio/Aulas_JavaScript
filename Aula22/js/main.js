// ? : O peração ternaria 
const pontuacaoUsuario = 10000;
const nivelUsuario = pontuacaoUsuario >=1000 ? 'usuario vip' : 'usuario normal';
console.log (nivelUsuario);
//(condição) ? caso atenda a condição : caso não atenda
const corUsuario = '#fff';
let corBody = corUsuario || 'Preto';
console.log(corBody);
