let totalGeral;
limpar();

function adicionar() {  
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorUnitario = parseFloat(produto.split('R$')[1]); // Converter o valor para número
  let quantidade = parseInt(document.getElementById('quantidade').value);
  
  if (quantidade <= 0 || isNaN(quantidade)) {
    alert('Por favor, insira uma quantidade válida maior que zero.');
    return;
  }
  
  let preco = quantidade * valorUnitario;
  
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
</section>`
  
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById('quantidade').value = 0;
}

function limpar() {
  totalGeral = 0;
  let carrinho = document.getElementById('lista-produtos').innerHTML = '';
  let campoTotal = document.getElementById('valor-total').textContent = 'R$ 0';
}
