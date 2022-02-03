const cliente = {
  nome: "Diego",
  idade: 24,
  cpf : "123456789",
  email: "diego@email.com"
}

const chaves = ["nome","idade","cpf","email"]

// console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["conta"])