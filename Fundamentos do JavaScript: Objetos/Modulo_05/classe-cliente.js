class Cliente{
  constructor(nome,email,cpf,saldo){
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }

  depositar(valor){
    this.saldo += valor;
  }

  exibirSaldo(){
    console.log(this.saldo);
  }
}

const diego = new Cliente("Diego","Diego@email.com","36996336946",100);
console.log(diego);