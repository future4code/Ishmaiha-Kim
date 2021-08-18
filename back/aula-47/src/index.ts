import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { connection } from './connection';


const app: Express = express();

app.use(express.json());
app.use(cors());

const getActorById = async (id: string): Promise<any> => {
   const result = await connection.raw(`
     SELECT * FROM Actor WHERE id = '${id}'
   `)
 
    return result[0]
 }

getActorById("002")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
});

app.get("/users/:id", async (req: Request, res: Response) => {
   try {
     const id = req.params.id
 
     console.log(await getActorById(id))
 
     res.end()
   } catch (error) {
       console.log(error.message)
     res.status(500).send("Unexpected error")
   }
})

const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birthday_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};

//EXERCÍCIO 2
//a.
const updateActorSalary = async (
  id: string, 
  salary: number
  ): Promise<any> => {
    const result = await connection ("Actor")
          .update ({
          salary: salary
          })
          .where({
          id:id
          })   
  }

updateActorSalary("002", 123456)
.then(result => {
  console.log(result)
})
.catch(err => {
  console.log(err)
});

//b.
const deleteActor = async (
    id: string
): Promise <any> => {
  const result = await connection ("Actor")
        .delete()
        .where ({
          id: id
        })
}

deleteActor("002")
.then(result => {
  console.log(result)
})
.catch(err => {
  console.log(err)
});

//c.
const average = async (
  gender: string
): Promise <any> => {
  const result = await connection ("Actor")
  .avg()
  .where({
    gender:gender
  })
}

average("female")
.then(result => {
  console.log(result)
})
.catch(err => {
  console.log(err)
});

//EXERCÍCIO 3
//a.
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});