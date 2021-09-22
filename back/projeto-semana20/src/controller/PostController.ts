import { Request, Response } from "express";
import { createPostBusiness, getUserByIdBusiness } from "../business/PostBusiness";

export const createPostController = async (req:Request, res:Response) => {
      try{

      const token: string = req.headers.authorization as string

      if(!token){
          throw new Error ('Token must be provided')
      }

      const {selfie, description, type} = req.body

      if (!selfie || !description || !type){
          throw new Error ('Complete all fields please')
      }

      const post = await createPostBusiness({selfie, description, type, token})

      res.status(200).send('post created sucessfuly!')
      } catch(error){
          res.status(400).send(error.message)
      }
}

export const getPostByIdController = async (req: Request, res: Response) => {
    try{

    const input = {
        id: req.params.id as string
    }

    const post = await getUserByIdBusiness(input)

    res.status(200).send(post)

    } catch (error){
        res.status(400).send()
    }
}