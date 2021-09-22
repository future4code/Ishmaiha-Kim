import { signupConnection } from "../data/signUpUserData"
import { Authenticator } from "../services/authenticator"
import { HashManager } from "../services/hashManager"
import { IdGenerator } from "../services/idGenerator"

export const signUpBusiness = async ({ name, email, password }: any) => {
    if (!name || !email || !password) {
        throw new Error('Complete all fields please!')
    }

    if (password.length < 6) {
        throw new Error('Your password must be at least 6 characters')
    }

    const idGenerator = new IdGenerator()
    const randomId = idGenerator.generateId()

    const hashManager = new HashManager()
    const hash_password = hashManager.hash(password)

    const authenticator = new Authenticator()
    const token = authenticator.generateToken

    await signupConnection(
        {
            id: randomId,
            name,
            email,
            password: hash_password
        }
    )

    return token({ id:randomId })
}