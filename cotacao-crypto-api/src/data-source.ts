import "reflect-metadata"
import { DataSource } from "typeorm"
import CreateCriptomoedas1670803112581 from "./database/migrations/1670803112581-CreateCriptomoedas";
import { Criptomoeda } from "./entity/Criptomoeda";
const { db_host, db_user, db_password, db_name, db_port } = require('./config/index');

console.log("path:" + __dirname);

export const AppDataSource = new DataSource({
    type: "mysql",
    host: db_host,
    port: db_port,
    username: db_user,
    password: db_password,
    database: db_name,
    migrationsRun: true,
    entities: [Criptomoeda],
    migrations: [CreateCriptomoedas1670803112581],
})

AppDataSource.initialize().then(() => {
    console.log("Data Source foi iniciado!")
  })
  .catch((err) => {
    console.error("Erro durante inicializacao do Data Source:", err)
  });
