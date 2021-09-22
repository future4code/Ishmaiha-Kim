import { app } from "./app"
import { singUpController } from "./controller/signUpController"
import { loginController } from "./controller/loginController"
import { createPostController, getPostByIdController } from "./controller/PostController"

app.post('/users/signup', singUpController)
app.post('/users/login', loginController)
app.post('/post/create', createPostController)
app.get('/post/:id', getPostByIdController)
 