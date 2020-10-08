import { UserDto } from 'src/Models/Dto/user.Dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(res: any, userDto: UserDto): Promise<any>;
    signIn(req: any): Promise<{
        accessToken: string;
    }>;
}
