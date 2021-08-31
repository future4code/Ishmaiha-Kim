import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import { connection } from "./data/connection"
import { Transaction } from './transaction'

const app: Express = express();

app.use(express.json());
app.use(cors())

/*
1)
a. 
O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
Para chamar o constructor basta referenciar os atributos contidos na class com a palavra chave "this" e atribuir os valoes do constructor nela.
*/
//b. 
export class UserAccount {
   private cpf: string;
   private name: string;
   private age: number;
   private balance: number = 0;
   private transactions: Transaction[] =  [];
 
   constructor(
      cpf: string,
      name: string,
      age: number,
      
   ) {
      console.log("Chamando o constructor da classe UserAccount")
      this.cpf = cpf;
      this.name = name;
      this.age = age;
   }
 
   getCpf(){
      return this.cpf
   } 

   getName(){
      return this.name
   }

   getAge(){
      return this.age
   }

   getTransactions(){
      return this.transactions
   }

   setTransactions(newTransaction: Transaction){
      this.transactions.push(newTransaction)
   }

 }
 const persona = new UserAccount("5123215", "ish", 30)

 //Foi impressa apenas 1x no terminal

 //c.
 //Por meio do método get console.log(persona.getCpf())

 //2.
 const finance = new Transaction ("boleto", 123, "10/12/2021");
 persona.setTransactions(finance)
 console.log(persona.getTransactions())


 const server = app.listen(process.env.PORT || 3003, () => {
     if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
     } else {
        console.error(`Failure upon starting server.`);
     }
 });

 















