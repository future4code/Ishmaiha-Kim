import { Request, Response } from "express";
import { User } from "../class/user";
import { UserDataBase } from "../database/userDataBase";


export const createUsers = async(req:Request, res:Response):Promise<void> => {
    try{
        
        const id = "id" + Math.random().toString(16).slice(2)

        const {name, email, age} = req.body

        if(!id || !name || !email || !age){
            res.statusCode = 422
            throw "Dude.. put your'name', 'email' and 'age' please"
        }

        /*
        Instanciando "User" com os dados vindos do body. Por que?
        Para ter acesso às entidades e métodos
        */
        const newUser = new User( 
            id,
            name,
            email,
            age
        )

        /* 
        A const "newUserDataBase" está instanciando "UserDataBase".
        Por que? Para ter acesso às entidades e métodos
        */
        const newUserDataBase = new UserDataBase()
        await newUserDataBase.create(newUser)
    
        
        res.status(200).send(`User created successfully`)
    } catch(error){
        res.status(400).send("I don`t know whats going on")
    }
}