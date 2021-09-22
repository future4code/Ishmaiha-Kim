import { app } from "./app"
import { createUserController } from "./controller/createUserController"
import { login } from "./controller/loginController"
import { getAllUsersController } from "./controller/getAllUsersController"
import { deleteUserController } from "./controller/deleteUserController"


app.post('/user/signup', createUserController)
app.post('/user/login', login)
app.get('/user/all', getAllUsersController)
app.delete('/user/delete', deleteUserController)