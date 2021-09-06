import { Product } from "./product"

export class Ticket extends Product {
    public origin?: string
    public destiny?: string

    constructor(
        id: string,
        name: string,
        description: string,
        price: number,
        public TicketOrigin: string,
        public TicketDestiny: string
    ){
        super(id, name, description, price)
        this.origin = TicketOrigin
        this.destiny = TicketDestiny
    }


    public getTicketOrigin():string | undefined{
        return this.origin 
    }

    public setTicketOrigin(newTicketOrigin: string){
        return this.origin = newTicketOrigin
    }

    public getTicketDestiny():string | undefined{
        return this.description
    }

    public setTicketDestiny(newTicketDestiny:string){
        this.description = newTicketDestiny
    }
    
}