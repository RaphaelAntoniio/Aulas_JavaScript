function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor){
  if(this.saldo > valor){
    console.log(`Saldo insulficiente: this: ${this.saldo}`)
    return;
}
this.saldo -= valor;
this.verSaldo()
};
Conta.prototype.depositar=function(valor){
    this.saldo+=valor;
    this.verSaldo()
};
Conta.prototype.verSaldo=function(){
    console.log(`Ag/c ${this.agencia}/${this.conta} | SALDO: R$${this.saldo.toFixed(2)}`)
};

const conta1 = new Conta(11, 22, 10);
conta1.depositar(11);
conta1.sacar(20);

