import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

enum userType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

type User = {
  id: number,
  name: string,
  email: string,
  type: userType,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: userType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: userType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: userType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: userType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: userType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: userType.ADMIN,
      age: 60
  }
];

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("ping!")
})

/*ex.1)
a) O método HTTP a ser usado é o GET
b) Através da palavra "/users"
*/
app.get("/users", (req:Request, res:Response) => {
  let errorCode: number = 400
  try {
    const name: string = req.query.name as string;
    const user: User | undefined = users.find((user) => user.name === name);
    if(!users){
      errorCode = 404;
      throw new Error ("User not found")
    }
    res.status(200).send(user)

  } catch (error){
    res.status(400).send({message: error.message})
  }
})

/*ex.2)
a) Por meio dos query parameters pois o "type" é um filtro e não uma especificação como 
o "id" por exemplo.
b) Utilizando o método enum é possível mockar os valores do type.
*/
app.get("/users/type", (req:Request, res:Response) => {
  let errorCode: number = 400
  try {
    let type: string = req.query.type as string;
    if(type){
      type = type.toUpperCase()
      if(type in userType){
        const result = users.filter(user => user.type === type)
        return res.status(200).send(result)
      }
      errorCode = 404;
      throw new Error ("User not found")
    }
    res.status(200).send(type)

  } catch (error){
    res.status(400).send({message: error.message})
  }
})

/*ex.3)
a) Continua sendo query.
b) Utilizando o método enum é possível mockar os valores do type.
*/


app.listen(3003, () => {
  console.log('Server is running at http://localhost:3003')
})
