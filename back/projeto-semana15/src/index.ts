import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in s ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

export type Users = {
    cpf: number,
    name: string,
    birthdayYear: number,
    // transactions: Statement
}

export type Statement = {
    amount: number,
    date: any,
    description: string,
    balance: number
}

export const userBalance: Statement[] = [
    {
        amount: 222222,
        date: "",
        description: "Pagamento fatura nubank",
        balance: 123
    }
]

export let user: Users[] = [
    {
        cpf: 111,
        name: "Elias",
        birthdayYear: 1994,
        // transactions: 
    },

    {
        cpf: 222,
        name: "Rafael",
        birthdayYear: 2007,
        // transactions: []
    },

    {
        cpf: 333,
        name: "Joao",
        birthdayYear: 2010,
        // transactions: []
    },

    {
        cpf: 444,
        name: "Lucas",
        birthdayYear: 1990,
        // transactions: []
    },

    {
        cpf: 555,
        name: "Maria",
        birthdayYear: 2012,
        // transactions: []
    },

    {
        cpf: 666,
        name: "Luana",
        birthdayYear: 2009,
        // transactions: []
    },

    {
        cpf: 777,
        name: "Ester",
        birthdayYear: 2004,
        // transactions: []
    }
]

//Endpoint que pega todos os usuários do banco de dados
app.get("/users", (req:Request, res:Response) => {
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
        const { cpf, name, birthdayYear } = req.body
        const currentYear:number = 2021
        let age: number = currentYear - birthdayYear

        if(age < 18){
            errorCode = 406;
            throw new Error("You must be of legal age to create the account.")
        }
        
        if(age >= 18){
            res.status(200).send("Your account was created successfully!")
        } 
    } catch (error){
        res.status(errorCode).send(error.message)
    }
})