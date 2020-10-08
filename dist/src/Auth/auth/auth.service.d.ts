import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { UserDto } from 'src/Models/Dto/user.Dto';
import { UserDocument } from 'src/Models/Interface/user.interface';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    createUser(userDto: UserDto): Promise<any>;
    signIn(user: UserDocument): Promise<{
        accessToken: string;
    }>;
    validateUser(username: string, pass: string): Promise<UserDocument>;
}
