import { Request, Response } from "express";
import { signUpBusiness } from "../business/signUpBusiness";

export const singUpController = async(req: Request, res: Response) => {
    try {

    const {name, email, password} = req.body

    const token = await signUpBusiness({ name, email, password})

    res.status(200).send({message: 'User created! here`s your token', token})
    } catch (error){
        res.status(400).end()
    }
}