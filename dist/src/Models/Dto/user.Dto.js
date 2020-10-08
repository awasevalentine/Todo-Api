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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
const class_validator_1 = require("class-validator");
class UserDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(4, { message: 'minimum character allowed for a user is 4' }),
    class_validator_1.MaxLength(20, { message: 'the maximum character allowed for a username is 20' }),
    __metadata("design:type", String)
], UserDto.prototype, "userName", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(8, { message: 'password is too weak. password should be greater than 8 characters' }),
    class_validator_1.MaxLength(20, { message: 'password exceed maximum chacters allowed. maximium character allowed is 20' }),
    __metadata("design:type", String)
], UserDto.prototype, "passwordHash", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=user.Dto.js.map