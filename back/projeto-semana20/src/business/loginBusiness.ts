import { loginUserData } from "../data/loginUserData"
import { Authenticator } from "../services/authenticator"
import { HashManager } from "../services/hashManager"

export const loginBusiness = async (email:string, password:string) => {

    //Acho o usuário pelo email (sql.unique)
    const userLogin = await loginUserData(email)

    if(!userLogin){
        throw new Error ('User doenst exist')
    }

    //comparo o hash dessa senha com o hash da senha no banco de dados
    const hashManager = new HashManager()
    const isCorrectPassword:boolean = hashManager.compare(password, userLogin.password)

    if(!isCorrectPassword){
        throw new Error ('Invalid password')
    }

    const authenticator = new Authenticator()
    const token = authenticator.generateToken({id: userLogin.id})

    return {token: token, user: userLogin}
}