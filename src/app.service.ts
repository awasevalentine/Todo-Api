import { Injectable } from '@nestjs/common';
import { TodoItems } from './Models/Interface/todo.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoDto } from './Models/Dto/todo.Dto';

@Injectable()
export class AppService {

  constructor(@InjectModel('Todo') private readonly todoModel: Model<TodoItems>){}

  async createTodo(todo: TodoDto): Promise<TodoItems> {
    const addTodo = await new this.todoModel(todo);
    return addTodo.save();
  }

  async getTodos(): Promise<TodoItems[]> {
    
    return await this.todoModel.find().exec();
  }

  async getTodoById(todoId: string): Promise<TodoItems> {
    return await this.todoModel.findById({_id:todoId});
  }

  async updateTodo(todoId:string, todoDto: TodoDto): Promise<TodoItems> {
    return await this.todoModel.findByIdAndUpdate({_id: todoId}, todoDto);
  }

  async deleteTodo(todoId: string): Promise<TodoItems> {
    return await this.todoModel.findByIdAndDelete({_id: todoId});
  }
}
