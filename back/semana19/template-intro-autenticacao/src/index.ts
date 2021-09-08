import app from "./app"
import createUser from './endpoints/createUser'
import searchUser from "./endpoints/searchUser"



app.post("/users/signup", createUser)
app.post("/users/login", searchUser)



// app.put('/users/:id', editUser)







// // const token:string = sign(
// //     {id: "id-do-Ishmaiha"},
// //     "segredo para gerar a assinatura do token",
// //     {expiresIn: "3h"}
// // )

// // const tokenData = verify(token, "segredo para gerar a assinatura do token")

// // console.log({token, tokenData})
