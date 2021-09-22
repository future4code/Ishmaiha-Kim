import { connection } from "./connection";

export const loginUserData = async (email:string): Promise<any> => {
    const result = await connection('laBook_users')
    .where({email:email})

    if(!result[0]){
        throw new Error ('User not found')
    }

    return {
        id: result[0].id,
        name: result[0].name,
        email: result[0].email,
        password: result[0].password
    }
}