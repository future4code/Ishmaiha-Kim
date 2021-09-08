import { Request, Response } from "express";
import { IdGenerator } from "../services/IdGenerator";
import { createToken } from "../services/Authenticator";
import { userSearchById } from "../data/searchUserFunction";
import { userCriation } from "../data/createUserFunction";

export default async function searchUser(
    req: Request, res: Response
): Promise<void> {
    try {

        const {email, password} = req.body

        if(!email || email.indexOf("@") === -1){
            throw new Error ("Incorrect email. Please, check fields")
        }

        const otherNewUser = {email, password}

        const findUser = await userSearchById(otherNewUser.email)
        
        if(!password || findUser.password !== otherNewUser.password){
            throw new Error ("Wrong password! Try again!")
        }
        
        res.status(200).send("Logged!")
    } catch (error) {
        res.status(500).send({ message: "Internal server error" })
    }
}