import { Place } from "./classePlace";

export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      
  
      cep: string
    ) {
      super(cep);
    }
  }

  export const newCommerce = new Commerce(1, "Eu sou o CEP 3")