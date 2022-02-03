const cliente = {
  nome: "Diego",
  idade: 24,
  cpf : "123456789",
  email: "diego@email.com",
  fones: ["5521912345498","5521988853364"],
  dependentes: [{
    nome: "Ramona",
    parentesco: "Irmã",
    dataNasc: "20/03/2002"
  }]
}

// PUSH => ADICIONA NO ULTIMO INDICE DO ARRAY.
cliente.dependentes.push(
  {
    nome: "Felipe Falamansa",
    parentesco: "Primo",
    dataNasc: "01/01/2003"
  }
)

// console.log(cliente)

const filhoMaisNovo = cliente.dependentes.filter(
  dependente => dependente.dataNasc === "20/03/2002"
)

console.log(filhoMaisNovo[0].nome)