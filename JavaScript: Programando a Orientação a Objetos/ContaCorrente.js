import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    //ESTATICOS
    static numeroDeContas = 0;
    //PUBLICOS
    agencia;
    //PRIVADOS
    _cliente;
    // #saldo = 0 // https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    //ASSESSORES.
    set cliente( novoValor ) {
        if ( novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }


    get saldo() {
        return this._saldo;
    }

    //CONSTRUTORES
    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }
    
    //METODOS
    sacar(valor) {
        if ( this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if ( valor <= 0) {
            return;        
        }
        this._saldo += valor;
    }

    transferir( valor, conta ) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}