import { Client } from "./client"
import { Industry } from "./machine"


export class IndustrialClient extends Industry implements Client{
    private key:number

    constructor(
        protected machinesQuantity:number,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        key:number, 
        cep:string
        ){
        super(machinesQuantity, cep)
        this.key = key
    }
    
    public getKey():number{
        return this.key;
    }
    
    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}