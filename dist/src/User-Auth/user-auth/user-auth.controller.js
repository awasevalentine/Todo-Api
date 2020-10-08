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
exports.UserAuthController = void 0;
const common_1 = require("@nestjs/common");
const user_Dto_1 = require("../../Models/Dto/user.Dto");
const local_auth_guard_1 = require("../Guards/local-auth.guard");
const user_auth_service_1 = require("./user-auth.service");
let UserAuthController = class UserAuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signUp(userDto) {
        return await this.authService.signup(userDto);
    }
    async signIn(req) {
        return this.authService.login(req.user);
    }
};
__decorate([
    common_1.Post('/signup'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_Dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "signUp", null);
__decorate([
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.Post('/signin'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "signIn", null);
UserAuthController = __decorate([
    common_1.Controller('user-auth'),
    __metadata("design:paramtypes", [user_auth_service_1.UserAuthService])
], UserAuthController);
exports.UserAuthController = UserAuthController;
//# sourceMappingURL=user-auth.controller.js.map