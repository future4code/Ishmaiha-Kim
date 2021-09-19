import { Request, Response } from "express";
import { loginBusiness } from "../business/loginBusiness";

export const loginController = async (req: Request, res: Response) => {
    try{
    const {email, password} = req.body

    if(!email || !password){
        throw new Error ('Complete all fields please')
    }

    const output = await loginBusiness(email, password)

    res.status(200).send({token: output.token})
    } catch(error){
        res.status(400).send(error.message)
    }

}