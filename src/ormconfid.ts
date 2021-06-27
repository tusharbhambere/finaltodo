import { join } from "path";
import { ConnectionOptions } from "typeorm";
import { Todo } from "./database/Entity/todo.entity";
import dotenev from "dotenv"


dotenev.config()
const connectionOptions: ConnectionOptions = {
  url: process.env.DATABASE_URL,
  ssl :{rejectUnauthorized:false},
  type: "postgres",
  host: process.env.Host || "localhost",
  port: 5432,
  username: process.env.User ||  "tushar111",
  password: process.env.DB_Password ||  "Bunty@123",
  database: process.env.Database ||  "postgres",
  entities: [Todo],
  synchronize: true,
  dropSchema: false,
  migrationsRun: true,
  logging: false,
  logger: "debug",
  migrations: [join(__dirname, "src/migration/**/*.ts")],
};

export = connectionOptions;