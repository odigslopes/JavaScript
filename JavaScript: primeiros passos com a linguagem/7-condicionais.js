console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

// if ( idadeComprador >= 18) {
//     console.log("Comprador maior de idade!");
//     listaDeDestinos.splice(1, 1); //REMOVENDO ITEM
// } else if ( estaAcompanhada == true ) {
//         console.log("Comprador está acompanhado!");
//         listaDeDestinos.splice(1, 1); //REMOVENDO ITEM
//     } else {
//             console.log("Não é maior de idade e não está acompanhada. Não vender!");
//     }

if (idadeComprador >= 18 || estaAcompanhada == true ) {
    console.log("Boa Viagem!");
    listaDeDestinos.splice(2, 1); //REMOVENDO ITEM
} else {
    console.log("Não é maior de idade e não está acompanhada. Não vender!");
}

console.log("Embarque: \n\n")
if ( idadeComprador >= 18 && temPassagemComprada == true ) {
    console.log("Boa Viagem!");
} else {
    console.log("Você não pode embarcar!");
}


console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);