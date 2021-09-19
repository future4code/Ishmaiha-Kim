import { connection } from "./connection";

connection.raw(`
   CREATE TABLE IF NOT EXISTS laBook_users (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
   );

   CREATE TABLE IF NOT EXISTS laBook_posts (
      id VARCHAR(255) PRIMARY KEY,
      selfie VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      create_At DATE NOT NULL,
      type ENUM ("NORMAL", "EVENT") DEFAULT "NORMAL" NOT NULL,
      user_id VARCHAR(255),
      FOREIGN KEY (user_id) REFERENCES laBook_users(id)
   );
`).then(() => {
   console.log("Tabelas criadas!");
}).catch(error => {
   console.log(error.sqlMessage || error.message);
}).finally(()=>{
   connection.destroy()
})