const cliente = {
  nome: "Diego",
  idade: 24,
  cpf : "123456789",
  email: "diego@email.com",
  fones: ["5521912345498","5521988853364"]
}

cliente.dependentes = {
  nome: "Ramona",
  parentesco: "Irmã",
  dataNasc: "20/03/2002"
}

console.log(cliente)

cliente.dependentes.nome = "Ramona Wisch"

console.log(cliente)