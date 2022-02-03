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

const diego = new Cliente("Diego","123456789-98","diego@email.com",100)
console.log(diego);