import { Character } from "../model/character";
import { validateCharacter } from "./validateCharacter";

//Necessita do validateCharacter
export const performAttack1 = (attacker: Character, defender: Character) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error('Missing properties')
    }
    if (defender.defense > attacker.strength) {
        defender.hp
    } else {
        defender.hp = defender.hp - (attacker.strength - defender.defense);
    }
 
}

//Não necessita do validateCharacter
export const performAttack2 = (attacker: Character, defender: Character, validator: (whatEver: Character) => boolean) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error('Missing properties')
    }

    if (defender.defense > attacker.strength) {
        defender.hp
    } else {
        defender.hp = defender.hp - (attacker.strength - defender.defense);
    }
}