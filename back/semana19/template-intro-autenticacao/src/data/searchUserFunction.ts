import { connection } from "./connection";

export const userSearchById = async (email: string): Promise<any> => {
    await connection
    .select("*")
    .from ("Users")
    .where({email})

    return [0]
}