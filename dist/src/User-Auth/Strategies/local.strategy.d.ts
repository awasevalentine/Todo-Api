import { Strategy } from 'passport-local';
import { UsersService } from 'src/Users/users/users.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: UsersService);
    validate(username: string, password: string): Promise<any>;
}
export {};
