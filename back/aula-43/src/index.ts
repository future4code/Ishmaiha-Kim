import express, {Express, Request, Response} from "express"
import cors from 'cors'
import{countries} from "./data"

const app = express ()

app.use(express.json())
app.use(cors())

app.get("/countries", (req:Request, res:Response) => {
    res.send(countries)
})

app.get("/countries/:id", (req, res) => {
    const result = countries.find(
        (country) => {return country.id === Number(req.params.id)}
    )
    if (result === undefined){
        res.status(404).send("country not found")
    } else {
        res.send(result)
    }
})

app.delete("./countries/:id", (req, res) => {
    try {

        const token = req.headers.authorization

        if(!token){
            res.statusCode = 401
            throw new Error ("Não autorizado. Verifique se o header 'authorization foi passado'")
        }

        const index = countries.findIndex(
            (country) => {return country.id === Number(req.params.id)}
        )

        if(index === -1){
            res.statusCode = 404
            throw new Error ("country not found")
        }
        countries.splice(index,1)

        res.status(204).end()
    } catch (error) {
        res.statusMessage = error.message
        res.end()
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});