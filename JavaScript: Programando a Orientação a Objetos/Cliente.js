export class Cliente {
    nome;
    _cpf;

    //ASSESSORES

    get cpf() {
        return this._cpf;
    }

    //CONSTRUTORES

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}