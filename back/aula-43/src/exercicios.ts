import express, {Express, Request, Response} from "express"
import cors from 'cors'
import{countries} from "./data"
import { country} from "./types";

const app = express ()

app.use(express.json())
app.use(cors())

//ex.1
app.get("./countries", (req:Request, res:Response) => {
    const result = countries.map(country => ({
        id:country.id,
        name: country.name
    }))

    res.status(200).send(result) // também poderia colocar "res.send(result)" na linha de baixo
    
})

//ex.2
app.get("./countries/:id", (req:Request, res:Response) => {
     const result: country | undefined = countries.find(
         country => country.id === Number(req.params.id)
     )//Para cada país me retorne o ID do country que seja igual ao id
     if (result){
         res.status(200).send(result)
     } else {
         res.status(404).send("Error")
     }
    
})

//ex.3
app.get("./countries/search", (req:Request, res:Response) => {
    let result: country [] = countries;
    try {
        if (req.query.name) {
            result = result.filter ((country) => country.name.includes(req.query.name as string)
        )}

        if (req.query.capital) {
            result = result.filter ((country) => country.capital.includes(req.query.capital as string)
        )}

        if (req.query.continent){
            result = result.filter((country) => country.continent.includes(req.query.continent as string)
        )}

        res.status(200).send(result)

    } finally {
        res.status(400).send("Error");
    }
});


//ex.4
app.post("./countries/:id", (req:Request, res:Response) => {
    let errorCode = 404
    try {
    const countryIndex: number = countries.findIndex(
        (country) => country.id === Number(req.params.id)
    );

    if (countryIndex === -1) {
        errorCode = 404;
        throw new Error();
    }
  
    if (!req.body.name && !req.body.capital) {
    throw new Error("Invalid Parameters");
    }
  
    if (req.body.name) {
    countries[countryIndex].name = req.body.name;
    }

    if (req.query.capital) {
    countries[countryIndex].capital = req.body.capital;
    }

    res.status(200).send("Deu bom")
    } finally{
        res.status(400).send("Error")
    }
}) 


app.listen(3004, () => {
    console.log("Server is running in http://localhost:3004");
});