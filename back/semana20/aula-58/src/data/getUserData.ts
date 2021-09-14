import { connection } from "./connection";

export const getUserByEmail = async (email:string): Promise<any> => {
    try{
    const result = await connection()
    .select("*")
    .from('class58_users')
    .where({email})
    if(!result[0]){
        throw new Error('User not found')
    }
    return {
        id:result [0].id,
        name: result[0].name,
        email: result[0].email,
        password: result[0].password,
        role: result[0].role
    }
    } catch(error){
        throw new Error('error')
    }
}