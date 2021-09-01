import { Place } from "./classePlace";

export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      cep: string
    ) {
      super(cep);
    }
  }

export const newResidence = new Residence(1, "Eu sou o CEP 1")
console.log(newResidence.getCep())