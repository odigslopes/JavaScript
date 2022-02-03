const cliente = {
  nome: "Diego",
  idade: 24,
  cpf : "123456789",
  email: "diego@email.com",
  fones: ["5521912345498","5521988853364"],
  dependentes: [
    {
      nome: "Ramona",
      parentesco: "Irmã",
      dataNasc: "20/03/2002"
    },
    {
      nome: "Felipe Falamansa",
      parentesco: "Primo",
      dataNasc: "01/01/2003"
    }
  ],
  saldo: 100,
  depositar: function(valor) {
    this.saldo += valor
  }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)