import { Character } from "../model/character"

export const validateCharacter = (input:Character):boolean => {
    if (!input.name || !input.hp || !input.defense || !input.strength){
        return false
    }

    if (input.hp <= 0 || input.defense <= 0 || input.strength <= 0){
        return false
    }

    return true
}

