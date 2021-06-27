import { EntityRepository, getRepository, Repository } from "typeorm";
import { Todo } from "../Entity/todo.entity";
import { Request, Response } from "express";

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
  //creat post
  async creatTodo(req: Request, res: Response) {
    let { title, description } = req.body;
    let todoData = {
      title: title,
      description: description,
    };
    let TodoRepo = getRepository(Todo);
    await TodoRepo.save(todoData)
      .then((data: any) => {
        return res.send({
          data: data,
          summited: true,
        });
      })
      .catch((error) => {
        return res.send({
          data: error,
          summited: false,
        });
      });
  }
  //get todos
  async getTodo(req: Request, res: Response) {
    let TodoRepo = getRepository(Todo);
    let todoData = await TodoRepo.find();
    if (todoData != null) {
      return res.send({
        data: todoData,
        received: true,
      });
    } else {
      return res.send({
        data: "no data",
        received: false,
      });
    }
  }
  //update todos
  async updateTodo(req: Request, res: Response) {
    let { id } = req.params;
    let { title, description } = req.body;

    let todoRepo = getRepository(Todo);

    await todoRepo
      .createQueryBuilder("todo")
      .update(Todo)
      .set({
        title: title,
        description: description,
      })
      .where("id=:id", { id: id })
      .execute()
      .then((data: any) => {
        return res.send({
          data: data,
          updated: true,
        });
      })
      .catch((error) => {
        return res.send({
          data: error,
          updated: false,
        });
      });
  }
  //delete
  async deleteTodo(req: Request, res: Response) {
    let { id } = req.params;
    let todoRepo = getRepository(Todo);

    await todoRepo
      .createQueryBuilder("todo")
      .delete()
      .from(Todo)
      .where("id=:id", { id: id }).execute().then((data:any)=>{
          return res.send({
              data:data,
              deleted:true,
              message:"data is delete"
          })
      });
  }
}
