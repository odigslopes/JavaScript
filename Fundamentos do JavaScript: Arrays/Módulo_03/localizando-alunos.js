const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

const exibeNomeENota = (nomeDoAluno) => {
  if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
    let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
    return listaDeNotasEAlunos[0][indice] + ", sua média é " +
    listaDeNotasEAlunos[1][indice]
  } else {
    return "Aluno não está cadastrado"
  }
}

console.log(exibeNomeENota("Ana"))
console.log(exibeNomeENota("João"))
console.log(exibeNomeENota("Caio"))
console.log(exibeNomeENota("Juliana"))
console.log(exibeNomeENota("Nemo"))