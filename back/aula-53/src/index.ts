import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { connection } from './data/connection';
import { client } from './client';
import { newResidence } from './residence';
import { newIndustry } from './machine';
import { newCommerce } from './floor';


const app: Express = express();

app.use(express.json());
app.use(cors());

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public introduceYourself(): string{
          return(`Olá, sou ${this.name}! Bom dia!`)
      }
  }

const newUser = new User("123", "eu@eu.com", "ish", "123456")

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

const newCustomer = new Customer("la", "le", "li", "lo", "lu")
console.log(newCustomer.introduceYourself())
console.log(newCustomer.getName())

console.log(client.calculateBill())

console.log(newResidence.getCep())
console.log(newIndustry.getCep())
console.log(newCommerce.getCep())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});