import { Model } from 'mongoose';
import { UserDto } from 'src/Models/Dto/user.Dto';
import { UserDocument } from 'src/Models/Interface/user.interface';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    createUser(userDto: UserDto): Promise<UserDocument>;
    validateUser(username: string, pass: string): Promise<UserDocument>;
}
