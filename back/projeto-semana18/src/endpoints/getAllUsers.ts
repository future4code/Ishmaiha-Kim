import { Request, Response } from "express";
import { User } from "../class/user";
import { UserDataBase } from "../database/userDataBase";
import { userArray } from "../entities/types";


export const getAllUsers = async(req:Request, res:Response):Promise<any> => {
    try{
        
    const newUserDataBase = new UserDataBase() //instanciamento para pegar o método getter
    const userArray: userArray[] = await newUserDataBase.getAllUsers()
        
    const mapUsers = userArray.map(user => {
        return new User (
            user.id,
            user.name,
            user.email,
            user.age
        )
    })
        
        res.status(200).send(mapUsers)
    } catch(error){
        res.status(400).send(error)
    }
}