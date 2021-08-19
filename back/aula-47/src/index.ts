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

//EXERCÍCIO 01
/* a.
Quando usamos o "raw" a query retorna as informações exatamente do mesmo
modo que o MySQL retorna. Por isso se utiliza o result[0][0]; para que ele retorna 
apenas as informações requeridos pelo front.
*/

//b.
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor 
      WHERE name = '${name}'
  `);

  return result[0][0]
}

//c.
const countActorsByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT COUNT(*) as actors FROM Actor
      WHERE gender = '${gender}'
  `);
  
  const actors = result[0][0].count
  return actors;
}

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

//EXERCÍCIO 02
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

    return result
  }

//b.
const deleteActor = async (
    id: string
): Promise <any> => {
  const result = await connection ("Actor")
    .delete()
    .where ({
      id: id
    })

    return result
  
}

//c.
const average = async (
  gender: string
): Promise <any> => {
  const result = await connection ("Actor")
  .avg("salary")
  .where({
    gender:gender
  })

  return result[0]
}

//EXERCÍCIO 03
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

//b.
app.get("/actor?gender=gender", async (req: Request, res: Response) => {
  let codeError = 400
  try {
    const count = await countActorsByGender(req.query.gender as string) 
    res.status(200).send(count)
  } catch (err){
    res.status(codeError).send(err)
  }
})

//EXERCÍCIO 04
//a.
app.put("/actor", async (req: Request, res: Response) => {
  try {
    const salary = await updateActorSalary(
      req.body.id,
      req.body.salary
    );

    res.status(200).send(salary);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//b.
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(
      req.params.id
    );
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