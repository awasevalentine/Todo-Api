"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const users_module_1 = require("src/Users/users.module");
const jwt_strategy_1 = require("./Strategies/jwt.strategy");
const local_strategy_1 = require("./Strategies/local.strategy");
const user_auth_controller_1 = require("./user-auth/user-auth.controller");
const user_auth_service_1 = require("./user-auth/user-auth.service");
let UserAuthModule = class UserAuthModule {
};
UserAuthModule = __decorate([
    common_1.Module({
        imports: [
            users_module_1.UsersModule,
            config_1.ConfigModule.forRoot(),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '60s' },
            }),
        ],
        controllers: [user_auth_controller_1.UserAuthController],
        providers: [user_auth_service_1.UserAuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        exports: [user_auth_service_1.UserAuthService],
    })
], UserAuthModule);
exports.UserAuthModule = UserAuthModule;
//# sourceMappingURL=user-auth.module.js.map