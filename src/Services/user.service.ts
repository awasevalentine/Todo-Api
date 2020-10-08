import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/Models/Interface/user.interface';

@Injectable()
export class UserService {

  constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>){}

  async createUser(user: UserDocument): Promise<UserDocument> {
    const newuser = await this.userModel.create(user);
    return newuser;
  }

  /*
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
  */
}
