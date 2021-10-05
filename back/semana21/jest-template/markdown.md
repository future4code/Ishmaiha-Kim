### EXERCÍCIO 01 ###
export interface User {
    name: string,
    balance: number
}

import { User } from "../model/user"

export const performPurchase = (user: User, value:number):User | undefined => {
    if(user.balance >= value){
        return {
            ...user,
            balance: user.balance - value
        }
    }
    return undefined
}

console.log(performPurchase)

### EXERCÍCIO 02 ### 
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

### EXERCÍCIO 03 ###
b. 
import { User, Casino, LOCATION, NACIONALITY } from "../model/casino";

export const verifyAge = (casino: Casino, users: User[]) => {
    const allowed: User[] = []
    const unallowed: User[] = []

    for (const user of users) {
        if (casino.location === LOCATION.EUA && user.age >= 21) {
            allowed.push(user)
        } else {
            unallowed.push(user)
        }

        if (casino.location === LOCATION.BRAZIL && user.age >= 18) {
            allowed.push(user)
        } else {
            unallowed.push(user)
        }
        break;
    }
    return {
        brazilians : {
            allowed: allowed.filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
            .map((person) => person.name),
            unallowed: unallowed.filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
            .map((person) => person.name)
        },

        americans : {
            allowed: allowed.filter((user) => user.nacionality === NACIONALITY.AMERICAN)
            .map((user) => user.name),
            unallowed: unallowed.filter((user) => user.nacionality === NACIONALITY.AMERICAN)
            .map((user) => user.name)
        }
    }
}

c.
O return

### EXERCÍCIO 04 ###
import { User, Casino, LOCATION, NACIONALITY } from "../src/model/casino"
import { verifyAge } from "../src/user/casinoFunction";

describe ("Testing verifyAge", () => {
    test("Testing whether brazilian can enter the brazilian casino",() => {
        const casino: Casino = {
            name: "Santiago Bernabeu",
            location: LOCATION.BRAZIL
        };

        const brazilian: User = {
            name: "Ishmaiha",
            age: 30, 
            nacionality: NACIONALITY.BRAZILIAN
        };

        const compare = verifyAge (casino, [brazilian])

        expect(compare.brazilians.allowed).toEqual(["Ishmaiha"])
    })
})

describe ("Testing verifyAge", () => {
    test("Testing no allowed people", () => {
        const casino: Casino = {
            name: "Camp Nou",
            location: LOCATION.BRAZIL
        };

        const american: User = {
            name: "Zé",
            age: 35,
            nacionality: NACIONALITY.AMERICAN
        }

        const compare = verifyAge(casino, [american])

        expect(compare.americans.allowed).toEqual(["Zé"])
    })
})

describe ("Testing verifyAge", () => {
    test("No one allowed", () => {
       
        const casino: Casino = {
            name: "Old Trafford",
            location: LOCATION.EUA
        }; 

        const brazilian1: User = {
            name: "João",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const brazilian2: User = {
            name: "Tiago", 
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const american1: User = {
            name: "Tadeu",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        };

        const american2: User = {
            name: "Tio Sam", 
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const compare = verifyAge(casino, [brazilian1, brazilian2, american1, american2]);

        expect(compare.brazilians.unallowed).toEqual(["João", "Tiago"]);
        expect(compare.americans.unallowed).toEqual(["Tadeu", "Tio Sam"]);
    })
})

describe ("Testing verifyAge", () => {
    test("Testing american allowed casino", () => {

        const casino: Casino = {
            name: "San Siro",
            location: LOCATION.EUA
        }; 

        const brazilian1: User = {
            name: "Clarice",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const brazilian2: User = {
            name: "Oswald", 
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        };

        const american1: User = {
            name: "Schumacher",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        };

        const american2: User = {
            name: "Jerry", 
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        const compare = verifyAge(casino, [brazilian1, brazilian2, american1, american2]);



    })
})
