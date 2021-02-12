import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    //ESTATICOS
    static numeroDeContas = 0;

    //CONSTRUTORES
    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }
    //SOBREESCREVENDO O COMPORTAMENTO DE SACAR!
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }

}