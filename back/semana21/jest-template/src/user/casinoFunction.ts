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