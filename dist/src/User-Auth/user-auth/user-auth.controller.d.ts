import { UserDto } from 'src/Models/Dto/user.Dto';
import { UserAuthService } from './user-auth.service';
export declare class UserAuthController {
    private authService;
    constructor(authService: UserAuthService);
    signUp(userDto: UserDto): Promise<void>;
    signIn(req: any): Promise<{
        access_token: string;
    }>;
}
