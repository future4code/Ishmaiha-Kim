import express, {Express, Request, Response} from 'express'
import { connection } from "../data/connection"
import { user } from "../types"

async function selectAllUsers(name: string):Promise<any> {
const result = await connection("aula48_exercicio")
    .where("name", `${name}`)
    return result
}

export const getUsersByName = async(req: Request,res: Response): Promise<void> =>{
    try {
        const nome = req.query.name || "%"
        const users = await selectAllUsers(nome as string)

        if(!users.length){
            res.statusCode = 404
            throw new Error("No users found")
        }
        
        res.status(200).send(users)
       
        
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}




 

 