import { Commerce } from "./floor"
import { Client } from "./client"

export class CommercialClient extends Commerce implements Client{
    private CNPJ: number

    constructor(
        CNPJ: number,
        public floorsQuantity: number,
        protected cep: string,
        public name:string,
        public registrationNumber: number,
        public consumedEnergy: number
    ){
        super(floorsQuantity, cep)
        this.CNPJ = CNPJ
    }

    public getCnpj():number {
        return this.CNPJ
    }

    public calculateBill():number {
        return this.consumedEnergy * 0.53
    }
}