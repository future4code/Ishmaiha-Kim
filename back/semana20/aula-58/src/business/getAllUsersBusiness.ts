import { allUsersData } from "../data/getAllUsersData"

export const getAllUsersBusiness = async (token:string) => {
    return await allUsersData(token)
}