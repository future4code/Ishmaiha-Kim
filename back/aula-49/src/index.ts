import express from "express"
import cors from 'cors'
import { AddressInfo } from "net";
import { getUsersByName} from "./endpoints/getUsersByName";
import { getNameOrType } from "./endpoints/getOrderByNameOrType";
import { getPage } from "./endpoints/pages";

export const app = express();

app.use(express.json());
app.use(cors());

// app.get("/users", getUsersByName)

// app.get("/users", getNameOrType)

app.get("/users", getPage)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});