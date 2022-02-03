const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

console.log(`
${listaDeNotasEAlunos[0][0]},
sua média é ${listaDeNotasEAlunos[1][0]},
${listaDeNotasEAlunos[0][1]},
sua média é ${listaDeNotasEAlunos[1][1]},
${listaDeNotasEAlunos[0][2]},
sua média é ${listaDeNotasEAlunos[1][2]},
${listaDeNotasEAlunos[0][3]},
sua média é ${listaDeNotasEAlunos[1][3]}`,
)