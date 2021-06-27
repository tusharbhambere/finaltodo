import dotenv from "dotenv"
import {Request,Response} from "express"
import { getManager } from "typeorm"
import { TodoRepository } from "../database/Resposity/todo.repo"

dotenv.config()
export class AuthController{

    static async creatTodo(req:Request,res:Response){
        let connectManger=getManager().getCustomRepository(TodoRepository)
        await connectManger.creatTodo(req,res)
    }
    static async getTodo(req:Request,res:Response){
        let connectManger=getManager().getCustomRepository(TodoRepository)
        await connectManger.getTodo(req,res)
    }
    static async updateTodo(req:Request,res:Response){
        let connectManger=getManager().getCustomRepository(TodoRepository)
        await connectManger.updateTodo(req,res)
    }
    static async deleteTodo(req:Request,res:Response){
        let connectManger=getManager().getCustomRepository(TodoRepository)
        await connectManger.deleteTodo(req,res)
    }
} 