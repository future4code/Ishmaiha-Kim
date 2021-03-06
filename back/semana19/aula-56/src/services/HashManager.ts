import bcrypt from "bcryptjs"

// SYNC
export class HashManager {
    hash = (plainText: string) => {
        const rounds = Number(process.env.BCRYPT_ROUNDS)
        const salt = bcrypt.genSaltSync(rounds)
        const result = bcrypt.hashSync(plainText, salt)

        return result
    }

    compare = (plainText: string, databasePassword: string) => {
        const result = bcrypt.compareSync(plainText, databasePassword)

        return result
    }
}

// ASYNC
// export class HashManagerAsync {
//     hash = async (plainText: string) => {
//         const rounds = Number(process.env.BCRYPT_ROUNDS)
//         const salt = await bcrypt.genSalt(rounds)
//         const result = await bcrypt.hash(plainText, salt)

//         return result
//     }

//     compare = async (plainText: string, databasePassword: string) => {
//         const result = await bcrypt.compare(plainText, databasePassword)

//         return result
//     }
// }