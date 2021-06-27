import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "reflect-metadata";
import { todoRouter } from "./routes/todo.routes";
import { createConnection, ConnectionOptions } from "typeorm";
import config from "./ormconfid";
dotenv.config();

createConnection(config as ConnectionOptions)
  .then(async (connection) => {
    if (connection.isConnected) {
      console.log("database connected");
    }
    const app = express();
    app.use(cors());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    const port = process.env.PORT || 8080;
    app.set("port", port);
    app.use("/user", todoRouter);

    app.listen(app.get("port"), () => {
      console.log(`working at port ${app.get("port")}`);
    });
  })
  .catch((error) => {
    console.log(`database not connected ${error}`);
  });
