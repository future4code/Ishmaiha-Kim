import { Request, Response } from "express";
import {connection} from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { user } from "../types";


export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name,  email, password } = req.body

      if (!name  || !email || !password ) {
         res.statusCode = 422
         throw new Error("Complete the fields 'name', 'nickname', 'password' and 'email'")
      }

      if (password.length < 6) {
         res.statusCode = 422
         throw new Error("Password must be be at least 6 characters")
      }

      const [user] = await connection('userName')
         .where({ email })

      if (!user) {
         res.statusCode = 409
         throw new Error('Email already registered')
      }

      const id: string = new IdGenerator().generateId()

      const hashManager = new HashManager() //instanciar o HashManager

      const hashedPassword = hashManager.hash(password) //acesso o password do hash da class HashManager para hashear o password vindo do body

      const newUser: user = {
         id, name, email, password: hashedPassword
      }    

      await connection('userName')
         .insert(newUser)

      const token:string = new Authenticator().generateToken({id})

      // Forma alternativa: 
         // const authenticator = new Authenticator()
         // const token:string = authenticator.generateToken({id})

      res.status(201).send({ token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.sqlMessage || error.message })
      }
   }
} 