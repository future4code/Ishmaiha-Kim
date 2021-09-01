import { Place } from "./classePlace";

export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      cep: string
          ) {
          super(cep);
    }
  }
export const newIndustry = new Industry(1, "Eu sou o CEP 2")