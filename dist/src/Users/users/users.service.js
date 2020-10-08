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
exports.UsersService = void 0;
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_Dto_1 = require("../../Models/Dto/user.Dto");
const user_interface_1 = require("../../Models/Interface/user.interface");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async createUser(userDto) {
        const { userName, passwordHash } = userDto;
        const hashedPassword = await bcrypt.hash(passwordHash, 10);
        const user = new this.userModel({ userName, passwordHash: hashedPassword });
        try {
            await user.save();
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.ConflictException('User already exists');
            }
            throw error;
        }
        return user;
    }
    async validateUser(username, pass) {
        const user = await this.userModel.findOne({ userName: username });
        if (!user) {
            return null;
        }
        const valid = await bcrypt.compare(pass, user.passwordHash);
        if (valid) {
            return user;
        }
        return null;
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map