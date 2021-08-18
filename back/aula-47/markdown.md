### Exercício 1
a. 
Quando usamos o "raw" a query retorna as informações exatamente do mesmo
modo que o MySQL retorna. Por isso se utiliza o result[0][0]; para que ele retorna 
apenas as informações requeridos pelo front.

b. 
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor 
        WHERE name = '${name}'
    `);

    return result[0]
}

c. 
const countActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as actors FROM Actor
        WHERE gender = '${gender}'
    `);
    
    actors = result[0].count
    return actors
}

### Exercício 2
a.
const updateActorSalary = async (
    id: string, 
    salary: number
    ): Promise<any> => {
        const result = await connection ("Actor)
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

b.
const deleteActor = async (
    id: string
): Promise <any> => {
    const result = await connection ("Actor")
        .delete()
        .where ({
            id: id
        })
    return result [0]
}

deleteActor("002")
.then(result => {
  console.log(result)
})
.catch(err => {
  console.log(err)
});

c. 
const average = async (
    gender: string
): Promise <any> => {
    await connection ("Actor")
    .avg()
    .where({
        gender:gender
    })

    return result [0]
}

average("female")
.then(result => {
  console.log(result)
})
.catch(err => {
  console.log(err)
});

### Exercício 3
a. 
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

b. 
