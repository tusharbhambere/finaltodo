import { join } from "path";
import { ConnectionOptions } from "typeorm";
import { Todo } from "./database/Entity/todo.entity";


const connectionOptions: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "tushar111",
  password: "Bunty@123",
  database: "postgres",
  entities: [Todo],
  synchronize: true,
  dropSchema: false,
  migrationsRun: true,
  logging: false,
  logger: "debug",
  migrations: [join(__dirname, "src/migration/**/*.ts")],
};

export = connectionOptions;