function Cliente(
  nome,
  cpf,
  email,
  saldo
) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function(valor) {
    this.saldo += valor;
  }
}

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup)
{
  Cliente.call(this,nome,cpf,email,saldo)
  this.saldoPoup = saldoPoup;
}

const diego = new ClientePoupanca("Diego","12345678998","diego@email.com",100,200)

console.log(diego)

ClientePoupanca.prototype.depositarPoup = function(valor){
  this.saldoPoup += valor;
}

diego.depositarPoup(30)

console.log(diego.saldoPoup); 