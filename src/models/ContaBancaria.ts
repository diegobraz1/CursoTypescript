export class ContaBancaria {

    saldo: number

    constructor() {
        this.saldo = 0
    }

    consultar(): number {
        return this.saldo
    }

    
}