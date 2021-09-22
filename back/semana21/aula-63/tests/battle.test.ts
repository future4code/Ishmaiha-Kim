import { performAttack2 } from "../src/character.ts/performAtack"
import { Character } from "../src/model/character"

describe("Testing performAttack2", () => {
    test("Creating mocks", () => {
        expect.assertions(4)
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Goku",
            hp: 1500,
            defense: 150,
            strength: 350
        }

        const defender: Character = {
            name: "Vegeta",
            hp: 1500,
            defense: 150,
            strength: 300
        }

        try {
            performAttack2(attacker, defender, validatorMock as any)

            expect(defender.hp).toEqual(1300)
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(2)
            expect(validatorMock).toHaveReturnedTimes(2)
        } catch (error) {
            const wrong = error as any
            expect(wrong.message).toEqual("Missing properties")
        }
    })
})


describe("Testing performAttack2", () => { 
        test("Creating mocks", () => {
            expect.assertions(4)
            const validatorMock = jest.fn(() => {
                return false
            })

            const attacker: Character = {
                name: "Freeza",
                hp: 1500,
                defense: 150,
                strength: 0
            }

            const defender: Character = {
                name: "Majimbu",
                hp: 1500,
                defense: 170,
                strength: 350
            }

            try {
                performAttack2(attacker, defender, validatorMock as any)

            } catch (error) {
                const wrong = error as any
                expect(wrong.message).toBe("Missing properties")
                expect(validatorMock).toHaveBeenCalled()
                expect(validatorMock).toHaveBeenCalledTimes(1)
                expect(validatorMock).toHaveReturnedTimes(1)
            }
        })
})
  