const clientes = [
  {
    nome: "Diego",
    cpf: "12332112312",
    dependentes: [{
      nome: "Sara",
      parentesco: "filha",
      dataNasc: "04/01/2011"
    },
    {
      nome: "Leticia",
      parentesco: "filha",
      dataNasc: "07/07/2003"
    }],
  },
  {
    nome: "Juliana",
    cpf: "567765658778",
    dependentes: [{
      nome:"Sofiah",
      parentesco:"sobrinha",
      dataNasc: "16/07/1997"
    }],
  },
]

const listaDepentendes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDepentendes);