import { Request, Response } from "express";
import {connection} from "../data/connection";
import { Authenticator } from "../services/Authenticator";


export default async function getUserByToken (req:Request, res:Response): Promise<void>{
    try{

    const tokenInput: string = req.headers.authorization as string

    if(!tokenInput){
        res.statusCode = 422
        throw new Error("Insert the token please!")
    }

    const token = new Authenticator().getTokenData(tokenInput) //compara o input do token com o token do banco de dados. Se forem iguais, retorna o id equivalente ao token

    const [user] = await connection.select().from('userName').where({id: token.id}) //busca o usuário no banco de dados cujo id seja o equivalente  ao id do token inserido

    if(!user){
        throw new Error('User not found!')
    }

    const {id, email, name} = user

     res.status(200).send({id, email, name})   
    }catch(error){
        res.status(400).send(error.message)
    }
}