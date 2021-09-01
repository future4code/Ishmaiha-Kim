import { Client } from "./client"
import { Residence } from "./residence"

export class ResidentialClient extends Residence implements Client{
    private cpf: string
    
    constructor (
        public name:string, // interface "Client"
        public registrationNumber: number, // interface "Client"
        public consumedEnergy: number, // interface "Client"
        cpf: string, //atributo dessa classe
        residentsQuantity: number, //atributo da classe "Residence"
        cep:string //atributo da classe raiz "Place"
        ){
        super(residentsQuantity, cep) //atributos das classes mães
        this.cpf = cpf
    }

    public getCpf():string{
        return this.cpf
    }

    public calculateBill():number{ //método da interface "Client"
        return this.consumedEnergy * 0.75
    }
}

/*
No polimorfismo-extends, a classe filha recebe os atributos da classe pai 
como parâmetro do "constructor" e os declara no "super"
No polimorfismo-implements, os atributos da interface é chamado no parâmetro do
constructor semelhantemente ao extends. 
No caso dos métodos da interface, é possível dar função ao método 
semelhantemente aos métodos getter e setter utilizando os atributos dela
por meio da palavra-chave "this"
*/