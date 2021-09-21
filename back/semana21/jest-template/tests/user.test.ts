import { performPurchase } from "../src/user/userFunction";
import { User } from "../src/model/user";

describe("Testing performPurchase", () => {
    test("Testing balance greater than value", () =>{
       const user: User = {
            name: "Ishmaiha",
            balance: 123456
       }

       const compare = performPurchase(user,123455)

       expect(compare).toEqual({
            ...user,
            balance: 1
       })
    })
})

describe("Testing performPurchase", () => {
     test("Testing balance equal to the value", () => {
          const user: User = {
               name: "Elias", 
               balance: 10
          }

          const compare = performPurchase(user, 10)

          expect(compare).toEqual({
               ...user,
               balance: 0
          })
          
     })
})

describe("Testing performPurchase", () => {
     test("Testing balance less than value", () => {
          const user: User = {
               name: "Rafaello", 
               balance: 100
          }

          const compare = performPurchase (user, 200)

          expect (compare).not.toBeDefined()
     })
})