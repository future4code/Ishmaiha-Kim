import { config } from "dotenv"
import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types"

config()

export const createToken = (input:authenticationData):string => {
    const token = jwt.sign(
        {id: input.id},
        process.env.JWT_KEY as string,
        {expiresIn: "24h"}
    );
    return token;
}
