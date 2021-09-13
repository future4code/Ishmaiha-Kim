import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export async function createRecipe (req:Request, res:Response): Promise<void>{
    try{
        const {title, description} = req.body

        const token = req.headers.authorization

        const tokenData = new Authenticator().getTokenData(token)

        if(!tokenData){
            throw new Error ('Error! Are you using the correct token?')
        }

        if(!title || !description){
            throw new Error ('Complete all fields please!')
        }

        const id = new IdGenerator().generateId()

        const createdAt = new Date()

        await connection.select().from('recipe').insert({id, title, description, created_at:createdAt, author_id:tokenData.id})

        res.status(200).send("Sucess Dude.. Nice recipe!")
    } catch(error){
        if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.sqlMessage || error.message })
      }
    }
}