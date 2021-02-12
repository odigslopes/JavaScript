console.log(`\nTrabalhando com loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("\nDestinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while ( contador < listaDeDestinos.length  ) {
    if ( listaDeDestinos[contador] == destino ) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existente: ", destinoExiste);

if ( podeComprar && destinoExiste ) {
    console.log("Boa Viagem!");
} else {
    console.log ("Desculpe tivemos algum erro!");
}


for (let i = 0 ; i < listaDeDestinos.length ; i++) {
    if ( listaDeDestinos[i] == destino ) {
        destinoExiste = true;
    }
}