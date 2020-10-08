import { AppService } from './app.service';
import { TodoItems } from './Models/Interface/todo.interface';
import { TodoDto } from './Models/Dto/todo.Dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllTodos(res: any): Promise<TodoItems[]>;
    getTodoById(res: any, id: string): Promise<TodoItems>;
    getTodoByUserId(res: any, id: string): Promise<TodoItems>;
    createTodo(todoDto: TodoDto, res: any): Promise<TodoItems>;
    updateTodoById(res: any, id: string, todoDto: TodoDto): Promise<TodoItems>;
    deleteTodoById(res: any, id: string): Promise<TodoItems>;
}
