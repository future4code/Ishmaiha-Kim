import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { login } from "./endpoints/login"
import { HashManager } from "./services/HashManager"

app.post('/users/signup', createUser)
app.post('/users/login', login)
app.put('/users', editUser)

const hashManager = new HashManager()
const bananinhaHasheada = hashManager.hash("bananinha")
console.log(hashManager.compare("bananinha", bananinhaHasheada))