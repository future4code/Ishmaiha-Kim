import { deleteUserData } from "../data/deleteUserData";
import { IdGenerator } from "../services/idGenerator";

export const deleteUserBusiness = async (input:{id: string, token: string}) => {
    
   const compareToken = deleteUserData(input.token)

   return await deleteUserData(input.id)

}