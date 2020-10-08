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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const todo_Dto_1 = require("../../Models/Dto/todo.Dto");
const user_Dto_1 = require("../../Models/Dto/user.Dto");
const todo_interface_1 = require("../../Models/Interface/todo.interface");
const user_interface_1 = require("../../Models/Interface/user.interface");
const user_service_1 = require("../../Services/user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async createTodo(userDto, res) {
        return res.json(`'User was successfully created!`, 200);
    }
};
__decorate([
    common_1.Post('/createTodo'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_Dto_1.UserDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createTodo", null);
UserController = __decorate([
    common_1.Controller('user/api'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map