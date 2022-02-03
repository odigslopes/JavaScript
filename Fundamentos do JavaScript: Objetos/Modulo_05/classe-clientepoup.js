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

class ClientePoupanca extends Cliente{
  constructor(nome, email, cpf, saldo, saldoPoupanca){
    super(nome, email, cpf, saldo)
    this.saldoPoupanca = saldoPoupanca;
  }

  depositarPoupanca(valor){
    this.saldoPoupanca += valor;
  }
}

const diego = new ClientePoupanca("Diego","Diego@email.com","36996336945",100,200);

console.log(diego)

diego.depositar(50)
diego.depositarPoupanca(50)

console.log(diego)