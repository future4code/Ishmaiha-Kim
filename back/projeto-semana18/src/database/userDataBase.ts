import { User } from "../class/user";
import { Database } from "./dataBase";


export class UserDataBase extends Database {
    private TABLE_NAME = "User" 
    //entidade do UserDataBase que está com conexão fixada no banco "User"

    /*
    método() de nome "create" cuja função é a de inserir no banco de dados
    "User" toda informação (parâmetro) em forma de objeto que seja do tipo "User".
    E onde esse objeto será criado? No endpoint! em que o as entidades de 
    "User" serão instanciadas com os dados enviados pelo body
    */

    async create(customer:User){ 
        await Database.connection(this.TABLE_NAME)
        .insert(customer)
    }

    /*
    método() que pega todos os objetos criados no método acima
    */
    async getAllUsers(){
        return Database.connection(this.TABLE_NAME).select()
    }
}
