//iife -> immediatly invoek function expression
(function(){
    const sobreNome = 'miranda';
    function criaNome(nome){
        return nome + ' ' + sobreNome;
    }
    function falaNome(){
        console.log(criaNome('Luiz'));
    }
    falaNome();
})();
