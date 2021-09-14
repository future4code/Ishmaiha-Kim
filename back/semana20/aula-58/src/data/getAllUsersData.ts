import { connection } from "./connection";

export const allUsersData = async (users:any = []):Promise<any> => {
    const result = await connection()
    .select("*")
    .from('class58_users')

    for(let user of result){
        return users.push(user)
    }

}