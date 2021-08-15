import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { user, Users, Statement } from './users';

const app: Express = express();
app.use(express.json());
app.use(cors());



//Endpoint que pega todos os usuários do banco de dados
app.get("/users/all", (req:Request, res:Response) => {
    let errorCode = 400;
    try{
        res.status(200).send(user)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

//Endpoint que pega o saldo
app.get("/users/statement", (req:Request, res:Response) => {
    let errorCode = 400;
    try{

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

//Endpoint que adiciona usuário
app.post("/users", (req:Request, res:Response) => {
    let errorCode = 400;
    try{
        const { cpf, name, birthdayYearAsString } = req.body

        const [day, month, year] = birthdayYearAsString.split("/")
        //vai retirar os "/" (01/01/2020) e substituir por uma array = [01, 01, 2020]
        //Dessa forma, a desustruturação do "birthday" fica const [01, 01, 2020]

        const birthdayYear: Date = new Date(`${year}-${month}-${day}`)

        const currentYear = Date.now()
        const age: number = currentYear - birthdayYear.getTime()
        const realAge:number = age/100/60/60/24/365

        user.push({
            name: name,//esse "name" é da requisição do body
            cpf: cpf,//esse "cpf" é da requisição do body
            birthdayYear: birthdayYear,//esse "birthday" é da requisição do body
            balance: 0,
            statement: []
        })

        if(realAge < 18){
            errorCode = 406;
            throw new Error("You must be of legal age to create the account.")
        }
        
        if(realAge >= 18){
        } 
        res.status(201).send("Your account was created successfully!")
    } catch (error){
        res.status(errorCode).send(error.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in s ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});