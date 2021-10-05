import { validateCharacter } from "../src/character.ts/validateCharacter"


//a
describe ("Testing validateCharacter", () => {
    test("Testing validateCharacter without name", () => {
        
        const character: boolean = validateCharacter({name: "",
            hp: 1500,
            defense: 1000,
            strength: 1500}) 

        expect(character).toBe(false)
    })
})

//b
describe ("Testing validateCharacter", () => {
    test("Testing hp = 0", () => {
        const character:boolean = validateCharacter({
            name: "Ishmaiha",
            hp: 0,
            defense: 777,
            strength: 111
        })

        expect(character).toBe(false)
    })
})

//c
describe ("Testing validateCharacter", () => {
    test("Testing stregth = 0", () => {
        const character: boolean = validateCharacter({
            name: "Chewbacca",
            hp: 1500,
            defense: 222,
            strength: 0
        })

        expect(character).toBe(false)
    })
})

//d
describe ("Testing validateCharacter", () => {
    test("Testing defense = 0", () => {
        const character: boolean = validateCharacter({
            name: "Chewbacca",
            hp: 1500,
            defense: 0,
            strength: 333
        })

        expect(character).toBe(false)
    })
})

//e
describe("Testing validateCharacter", () => {
    test("Testing hp < 0 || defense < 0 || strength < 0", () => {
        const character: boolean = validateCharacter({
            name: "Spooky",
            hp: -100,
            defense: 0.5,
            strength: 1
        })

        expect(character).toBe(false)
    })
})

//f
describe("Testing validateCharacter", () => {
    test("Testing valid informations", () => {
        const character: boolean = validateCharacter({
            name: "Kirk",
            hp: 1500,
            defense: 300,
            strength: 400
        })

        expect(character).not.toBe(false)
    })
})