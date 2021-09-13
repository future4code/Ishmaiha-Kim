import app from "./app"
import createUser from './endpoints/createUser'
import { login } from "./endpoints/login"
import getUserByToken from "./endpoints/getUserProfile"
import { getUserById } from "./endpoints/getUserById"
import { createRecipe } from "./endpoints/createRecipe"
import { getRecipeById } from "./endpoints/getRecipeById"

app.post('/users/signup', createUser)
app.post('/users/login', login)
app.get('/users/profile',getUserByToken)
app.get('/users/profile/:id', getUserById)

app.post('/recipe', createRecipe)
app.get('/recipe/:id', getRecipeById) 



