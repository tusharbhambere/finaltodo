import  Router  from "express";
import { AuthController } from "../controller/todo.controller";


const todoRouter=Router()

todoRouter.post("/creatTodo",AuthController.creatTodo)
todoRouter.get("/getTodo",AuthController.getTodo)
todoRouter.put("/updateTodo/:id",AuthController.updateTodo)
todoRouter.delete("/deleteTodo/:id",AuthController.deleteTodo)

export{todoRouter}