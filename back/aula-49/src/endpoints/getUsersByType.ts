import express, {Express, Request, Response} from 'express'
import { connection } from "../data/connection"


export async function selectByType(type: string):Promise<any> {
    const result = await connection("aula48_exercicio")
        .where("type", `${type}`)
        return result
    }
    
export const getTypes = async(req: Request,res: Response): Promise<void> =>{
    try {
        const type = req.params.type

        const types = await selectByType(type as string);

        if(!types.length){
            res.statusCode = 404
            throw new Error("No type found")
        }
        
        res.status(200).send(types)
        
        
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}