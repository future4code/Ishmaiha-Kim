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