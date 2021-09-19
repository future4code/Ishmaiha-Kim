import { connection } from "./connection";
import {User} from "../model/userModel"

export const signupConnection = async (user:User)=> {
    await connection('laBook_users')
    .insert(
        {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        }
    )
}