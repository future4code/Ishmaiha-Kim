import { connection } from "./connection";

export const userCriation = async (
    id: string, 
    email: string, 
    password: string) => {
    await connection
    .insert(
        {id, email, password}
    )
    .into("Users")
}