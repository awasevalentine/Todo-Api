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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AppService = class AppService {
    constructor(todoModel) {
        this.todoModel = todoModel;
    }
    async createTodo(todo) {
        const addTodo = await new this.todoModel(todo);
        return addTodo.save();
    }
    async getTodos() {
        return await this.todoModel.find().exec();
    }
    async getTodoById(todoId) {
        return await this.todoModel.findById({ _id: todoId });
    }
    async getTodoByUserId(userId) {
        return await this.todoModel.find({ userId: userId });
    }
    async updateTodo(todoId, todoDto) {
        return await this.todoModel.findByIdAndUpdate({ _id: todoId }, todoDto);
    }
    async deleteTodo(todoId) {
        return await this.todoModel.findByIdAndDelete({ _id: todoId });
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Todo')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map