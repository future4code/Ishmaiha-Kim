import express, {Express, Request, Response} from 'express'
import { connection } from "../data/connection"

export const getPage = async(req: Request,res: Response): Promise<void> =>{
    try {
        const sort = req.query.sort || "email"
        const order = req.query.order || "asc"
        const page = Number(req.query.page) || 1

        if(sort !== "name" && sort !== "type" && sort !== "email"){
            res.statusCode = 422
            throw new Error ("'sort' must be either 'name' or 'type'")
        }

        if(order !== "asc" && order !== "desc"){
            res.statusCode = 422
            throw new Error ("'order' must be either 'asc' or 'desc'")
        }

        const offset = 10 * (page - 1 )
        
        const result = await connection("aula48_exercicio")
            .orderBy(sort, order)//sempre recebe 2 argumentos. 
            //a coluna e se é crescente ou decrescente
            .limit(5)
            .offset(offset)
        
        if(!result.length){
            res.statusCode = 404
            throw new Error("No type found")
        }
        
        res.status(200).send(result)
        
        
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}