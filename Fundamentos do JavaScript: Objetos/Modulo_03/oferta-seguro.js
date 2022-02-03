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


function oferecerSeguro(obj) {
  const propsClientes = Object.keys(obj);
  if ( propsClientes.includes("dependentes")) {
    console.log(`Oferta de seguro de vida para ${obj.nome}`)
  }

}

console.log(Object.entries(cliente));
oferecerSeguro(cliente);