import { connection } from "./connection";

connection.raw(`
   CREATE TABLE IF NOT EXISTS userName (
      id VARCHAR(64) PRIMARY KEY,
      name VARCHAR(64) NOT NULL,
      email VARCHAR(64) NOT NULL UNIQUE,
      password VARCHAR(64) NOT NULL
   );
   CREATE TABLE IF NOT EXISTS recipe (
      id VARCHAR(64) PRIMARY KEY,
      title VARCHAR(64) NOT NULL,
      description VARCHAR(1024) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      author_id VARCHAR(64),
      FOREIGN KEY (author_id) REFERENCES userName(id)
      
   );
`).then(() => {
   console.log("Tabelas criadas!");
}).catch(error => {
   console.log(error.sqlMessage || error.message);
}).finally(()=>{
   connection.destroy()
})