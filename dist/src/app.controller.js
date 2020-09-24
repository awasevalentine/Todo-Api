"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const todo_Dto_1 = require("./Models/Dto/todo.Dto");
const path_1 = require("path");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getAllTodos(res) {
        const data = await this.appService.getTodos();
        return res.json(data, 200);
    }
    async getTodoById(res, id) {
        const todoById = await this.appService.getTodoById(id);
        if (!todoById) {
            throw new common_1.NotFoundException(`Todo with id = ${id} not found! `);
        }
        return res.json(todoById, 200);
    }
    root(response) {
        response.sendFile(path_1.default.resolve('./dist/simple-todo-app/index.html'));
    }
    async createTodo(todoDto, res) {
        await this.appService.createTodo(todoDto);
        return res.json(`'Todo was successfully created!`, 200);
    }
    async updateTodoById(res, id, todoDto) {
        const todo = await this.appService.updateTodo(id, todoDto);
        if (!todo) {
            throw new common_1.NotFoundException(`Todo with id = ${id} not found! `);
        }
        return res.json(`Todo with id = ${id}, is successfully updated!`, 200);
    }
    async deleteTodoById(res, id) {
        const todo = await this.appService.deleteTodo(id);
        if (!todo) {
            throw new common_1.NotFoundException(`Todo with id = ${id} not found!`);
        }
        return res.json(`Todo with id = ${id}, is successfully deleted`);
    }
};
__decorate([
    common_1.Get('/getTodos'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAllTodos", null);
__decorate([
    common_1.Get('/getTodo/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Query('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTodoById", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "root", null);
__decorate([
    common_1.Post('/createTodo'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_Dto_1.TodoDto, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createTodo", null);
__decorate([
    common_1.Put('/updateTodo/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, todo_Dto_1.TodoDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateTodoById", null);
__decorate([
    common_1.Delete('/deleteTodo/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteTodoById", null);
AppController = __decorate([
    common_1.Controller('todo/api'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map