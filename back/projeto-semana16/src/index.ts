import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import { connection } from './connection';

const app: Express = express();

app.use(express.json());
app.use(cors());

//EXERCÍCIO 01
const createUser = async (
   name: string,
   nickname: string,
   email: string
): Promise <any> => {
   await connection ("labenuSemana16")
   .insert({
      name: name,
      nickname: nickname,
      email: email
   })
   .into("labenuSemana16");
}

app.post("/user", async (req: Request, res: Response) => {
   let errorCode = 400;
   try{
      const userCreated = await createUser(
         req.body.name,
         req.body.nickname,
         req.body.email
      );

      res.status(200).send(`Sucessful! Welcome ${userCreated}`);
   } catch (err) {
      res.status(errorCode).send(`${err}. Please check if the fields are correctly filled.`)
   }
})

//EXERCÍCIO 02
const getUserById = async (id: number
   ): Promise <any> => {
   const result = await connection.raw(`
      SELECT id, nickname FROM labenuSemana16
      WHERE id = '${id}'
   `);

   return result[0]
}

app.get("/user/:id", async (req: Request, res: Response) => {
   let errorCode = 400;
   try {
      const id = req.params.id
      const user = await getUserById(Number(id))
      
      res.status(200).send(`O usuário é ${user}`)
   } catch (err){
      res.status(errorCode).send(`${err}. Please check if the fields are correctly filled.`)
   }
});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
})