import { config } from "dotenv"
import * as jwt from "jsonwebtoken";
import { authenticationData } from "../model/userModel"

config()

export class Authenticator {

   public generateToken = (
      payload: authenticationData 
   ): string => {
      return jwt.sign(
         payload,
         process.env.JWT_KEY as string,
         { expiresIn: "1d" }
      ) 
   }

   public decodeTokenData = (
    token: string
 ): authenticationData => {
    return jwt.verify(
       token,
       process.env.JWT_KEY as string
    ) as authenticationData
 }


}