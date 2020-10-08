import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/Models/Dto/user.Dto';
import { UsersService } from 'src/Users/users/users.service';
export declare class UserAuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signup(userDto: UserDto): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
