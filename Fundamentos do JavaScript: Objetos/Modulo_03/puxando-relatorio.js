const cliente = {
  nome: 'Diego',
  idaide: '24',
  cpf: '12345678917',
  email: "diego@email.com",
  fones: [ '559123455678', '5511947554664'],
  dependentes: [
    {
      nome: 'Sara Silva',
      parentesco: 'Irmã',
      dataNasc: '20/03/2011'
    },
    {
      nome: 'Samia Maria',
      parentesco: 'Prima',
      dataNasc: '04/01/2014'
    }
  ],
  saldo: 100,
  depositar: function(valor) {
    this.saldo += valor
  }
}

let relatorio = "";

for( let info in cliente ) {
  if(typeof cliente[info] === "object" || typeof cliente[info] === "function") 
  {
    continue
  } else {
    relatorio += `
    ${info} ==> ${cliente[info]}`
  }
}

console.log(relatorio)