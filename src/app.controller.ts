import { Controller, Get, Param, Res, NotFoundException, Body, Put, Post, Delete, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoItems } from './Models/Interface/todo.interface';
import { TodoDto } from './Models/Dto/todo.Dto';
import path from 'path';

@Controller('todo/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getTodos')

  async getAllTodos(@Res() res ): Promise<TodoItems[]> {
    const data = await this.appService.getTodos();
    return res.json(data, 200);
  }

  @Get('/getTodo/:id')

  async getTodoById(@Res() res, @Query('id') id: string): Promise<TodoItems> {
    const todoById = await this.appService.getTodoById(id);
    if(!todoById) {
      throw new NotFoundException(`Todo with id = ${id} not found! `);
    }
    return res.json(todoById, 200);
  }

  /*@Get()
  root(@Res() response): void {
    // the homepage will load our index.html which contains angular logic
    response.sendFile(path.resolve('./dist/simple-todo-app/index.html'));
  }*/

  @Post('/createTodo')
  async createTodo(@Body() todoDto: TodoDto, @Res() res): Promise<TodoItems> {
    await this.appService.createTodo(todoDto);
    return res.json(`'Todo was successfully created!`, 200);
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
