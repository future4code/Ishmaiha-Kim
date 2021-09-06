import app from "./entities/app";
import { createUsers } from "./endpoints/createUser";
import { getAllUsers } from "./endpoints/getAllUsers";
import { createProducts } from "./endpoints/createProduct";

app.post("/users/create", createUsers)
app.get("/users/get",getAllUsers)
app.post("/product/create", createProducts)
// app.get()
