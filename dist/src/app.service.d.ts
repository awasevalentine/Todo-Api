import { TodoItems } from './Models/Interface/todo.interface';
import { Model } from 'mongoose';
import { TodoDto } from './Models/Dto/todo.Dto';
export declare class AppService {
    private readonly todoModel;
    constructor(todoModel: Model<TodoItems>);
    createTodo(todo: TodoDto): Promise<TodoItems>;
    getTodos(): Promise<TodoItems[]>;
    getTodoById(todoId: string): Promise<TodoItems>;
    updateTodo(todoId: string, todoDto: TodoDto): Promise<TodoItems>;
    deleteTodo(todoId: string): Promise<TodoItems>;
}
