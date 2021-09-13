import { Request, Response } from "express";
import {connection} from "../data/connection";
import { Authenticator } from "../services/Authenticator";

export async function getUserById(req:Request, res:Response): Promise<void> {
    try{

    const tokenInput: string = req.headers.authorization as string

    const token = new Authenticator().getTokenData(tokenInput)

    if(!token){
        throw new Error ('Error! Are you using the correct token?')
    }

    const userId = req.params.id

    const [user] = await connection.select().from('userName').where({id:userId})

    if(!user){
        throw new Error ('User not found!')
    }

    const {id, name, email} = user

    res.status(200).send({id, name, email})    
    }catch(error){
        res.status(400).send(error.message)
    }
}