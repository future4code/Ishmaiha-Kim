 import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export const login = async (
   req: Request,
   res: Response
) => {
   try {

      // buscar o usuário no banco por email
      const { email, password } = req.body

      const [user] = await connection("userName").where({ email }) //coloca o "user" dentro de [] para que a resposta venha em formato de array

      /*
      O banco de dados está em forma de hash e, portanto, a senha digitada pelo
      usuário sempre será diferente do hash no banco de dados. O que fazer então?
      Pegar a senha digitada pelo usuário e dar o comando para o bcrypt checar
      se a senha digitada === ao hash do banco de dados 
      (bananinha123 => bcrypt.compare(bananinha123, hash))
      */

      const hashManager = new HashManager() //instancio novamente
      const isPasswordCorrect:boolean = hashManager.compare(password, user.password) //"is" significa que sera um "boolean" (boas práticas)

      // conferir se ele existe e a senha está correta
      if(!user || !isPasswordCorrect){
         res.statusCode = 401
         throw new Error("Credenciais inválidas")
      }
      // gerar o token e enviar na resposta da requisição
      const token:string = new Authenticator().generateToken({
        id: user.id
     })

     res.send({token})

  } catch (error) {
     if (res.statusCode === 200) {
        res.status(500).send({ message: "Internal server error" })
     } else {
        res.send({ message: error.sqlMessage || error.message })
     }
  }
} 