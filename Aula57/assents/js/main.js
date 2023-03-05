function ValidaCPF(cpfEnviado){
 Object.defineProperty(this, 'cpfLimpo',{
    enumerable: true,
    get: function(){
        return cpfEnviado.replace(/\D+/g,'');
    }
 })
}
ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
    
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digitoum = this.criaDigito(cpfParcial);
    const digitodois = this.criaDigito(cpfParcial+digitoum);
    const novoCpf = cpfParcial + digitoum + digitodois
    console.log(novoCpf);

    return novoCpf === this.cpfLimpo;
};
ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    
    let regresivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val)=>{
        ac+= (regresivo * Number(val));
        regresivo--;
        return ac;
    }, 0)
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};
ValidaCPF.prototype.isSequencia = function(){
    const sequencia =  this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};
const cpf = new ValidaCPF('021.180.436-35');
console.log(cpf.valida());
cpf.valida();