import { Request, Response } from "express";
import { connection } from "../data/connection";


export async function getRecipeById (req:Request, res:Response): Promise<void>{
    try{

        const id = req.params.id

        const [recipe] = await connection.select().from('recipe').where(id)

        if(!recipe){
            throw new Error ('Not found')  
        }

        res.status(200).send("Recipe created sucessfully")
    } catch(error){
        if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.sqlMessage || error.message })
      }
    }
}