const cliente = {
  nome: "Diego",
  idade: 24,
  cpf : "123456789",
  email: "diego@email.com"
}

console.log(
  `Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`
)

console.log(cliente.cpf.substring(0,3))