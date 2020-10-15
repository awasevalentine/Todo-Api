import { Controller, Get, Param, Res, NotFoundException, Body, Put, Post, Delete, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoItems } from './Models/Interface/todo.interface';
import { TodoDto } from './Models/Dto/todo.Dto';

@Controller('todo/api')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post('/createTodo')
  async createTodo(@Body() todoDto: TodoDto, @Res() res): Promise<TodoItems[]> {
    if (!todoDto.userId)
      return res.json('please specify a user id for this todo', 400);
    await this.appService.createTodo(todoDto);
    console.log(`this are the created data ->`, todoDto);
    return res.json(`'Todo was successfully created!`, 200);
  }

  @Get('/getTodos')

  async getAllTodos(@Res() res ): Promise<TodoItems[]> {
    const data = await this.appService.getTodos();
    return res.json(data, 200);
  }


  @Get('/userId/:id')
  async  getTodosByUserId(@Res() res, @Param('id') id: string): Promise<TodoItems> {
    const todoById = await this.appService.getTodoByUserId(id);
    if(!todoById) {
      throw new NotFoundException(`Todo with id = ${id} not found! `);
    }
    return res.json(todoById, 200);
  }

  @Get('/getTodo/:id')

  async getTodoById(@Res() res, @Param('id') id: string): Promise<TodoItems> {
    const todoById = await this.appService.getTodoById(id);
    if(!todoById) {
      throw new NotFoundException(`Todo with id = ${id} not found! `);
    }
    return res.json(todoById, 200);
  }


  @Put('/updateTodo/:id')

  async updateTodoById(@Res() res, @Param('id') id:string, @Body() todoDto: TodoDto ): Promise<TodoItems> {
    const todo = await this.appService.updateTodo(id, todoDto);
    if(!todo){ 
      throw new NotFoundException(`Todo with id = ${id} not found! ` )
    }
    return res.json(`Todo with id = ${id}, is successfully updated!`, 200);
  }

  @Delete('/deleteTodo/:id')

  async deleteTodoById(@Res() res, @Param('id') id:string ): Promise<TodoItems> {
    const todo = await this.appService.deleteTodo(id);
    if(!todo){
      throw new NotFoundException(`Todo with id = ${id} not found!`)
    }
    return res.json(`Todo with id = ${id}, is successfully deleted`);
  }

}
