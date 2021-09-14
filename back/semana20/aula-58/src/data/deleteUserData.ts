import { connection } from "./connection";

export const deleteUserData = async (id: string): Promise<any> => {
    try{
        const result = await connection()
        .from('class58_users')
        .where({id})
        .del()

    } catch (error){
        throw new Error ("Error")
    }
}