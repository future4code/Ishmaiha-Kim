import { Product } from "../class/product";
import { Ticket } from "../class/ticket";
import { Database } from "./dataBase";


export class ProductDataBase extends Database {
    private TABLE_NAME = "Product"
    //atributo de nome "TABLE_NAME" com o nome "Product"

    /*
    método() que recebe uma instancia do usuario que sera criado no endpoint e o 
    insere no banco de dados "Product"
    */
    async create(commoditie: Product | Ticket){
        await Database.connection(this.TABLE_NAME)
        .insert(commoditie)
    }

    /*
    método() que pega todos os objetos criados no método acima
    */
    async getAllProducts(){
        return Database.connection(this.TABLE_NAME).select()
    }
}

