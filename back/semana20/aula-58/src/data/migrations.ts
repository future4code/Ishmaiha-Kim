import { connection } from "./connection";

connection.raw(`
   CREATE TABLE IF NOT EXISTS class58_users (
      id VARCHAR(64) PRIMARY KEY,
      name VARCHAR(64) NOT NULL,
      email VARCHAR(64) NOT NULL UNIQUE,
      password VARCHAR(64) NOT NULL,
      role ENUM ("NORMAL", "ADMIN") NOT NULL
   );
`).then(() => {
   console.log("Tabelas criadas!");
}).catch(error => {
   console.log(error.sqlMessage || error.message);
}).finally(()=>{
   connection.destroy()
}) 