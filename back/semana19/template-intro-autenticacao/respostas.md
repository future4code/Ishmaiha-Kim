### EXERCÍCIO 01 ###
a. 
Utilizar strings para "ids" tem algumas vantagens em relação a números. A principal delas é que são menos previsíveis uma vez que se pode misturar letras com números as tornando menos vulneráveis a invasões. Portanto, "ids" strings são melhores que "ids" numéricas.

b.
Pasta "services" --> IdGenerator.ts

### EXERCÍCIO 02 ###
a.
A função assíncrona "createUser" está recebendo id, email e password como parâmetro e inserindo-as no id, email e password, respectivamente, na tabela "User".

b.
Pasta "data" --> migrations.ts
CREATE TABLE IF NOT EXISTS User (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL
);

c.
import Knex from "knex";
import { connection } from "./connection";

const userCriation = async (
    id: string, 
    email: string, 
    password: string) => {
    await connection
    .insert(
        {id, email, password}
    )
    .into("User")
}


### EXERCÍCIO 03 ###
a.
"as string" transforma o código em questão em string. 
É necessário usá-la para garantir com que a "key" seja uma string uma vez que o padrão JWT exige que seja uma string.

b.
export const createToken = (input:authenticationData):string => {
    const token = jwt.sign(
        {id: input.id},
        process.env.JWT_KEY as string,
        {expiresIn: "24h"}
    );
    return token;
}


### EXERCÍCIO 04 ###
import { Request, Response } from "express";
import { IdGenerator } from "../services/IdGenerator";
import { user } from "../types";
import { createToken } from "../services/Authenticator";
import { userCriation } from "../data/createUserFunction";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const {email, password} = req.body

      if(!email || email.indexOf("@") === -1){
         throw new Error("Incorrect email. Please, check fields")
      }

      if(!password || password.length < 6 ){
         throw new Error ("Password must be 6 or more characters")
      }

      const idGenerator = new IdGenerator()
      const id: string = idGenerator.generateId()

      const newUser:user = {id, email, password}

      const token = createToken({id})

      await userCriation(id, email, password)

      res.status(200).send(`${token}: token generated by jwt`)


   } catch (error) {

      if (res.statusCode === 500) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.sqlMessage || error.message })
      }
   }
}

### EXERCÍCIO 05 ###
import { connection } from "./connection";

export const userSearchById = async (email: string): Promise<any> => {
    await connection
    .select("*")
    .from ("User")
    .where({email})

    return [0]
}


### EXERCÍCIO 06 ###
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


### EXERCÍCIO 07 ###
a.
É uma palavra-chave que diz ao compilador para considerar o objeto como um tipo diferente do tipo que o compilador infere que o objeto seja.
Precisamos do "as any" pois a chave "JWT_KEY" está vindo em forma de string.

b.
import * as jwt from "jsonwebtoken";

const getUser = (token: string): authenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};

### EXERCÍCIO 08 ###