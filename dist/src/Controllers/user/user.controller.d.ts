import { UserDto } from 'src/Models/Dto/user.Dto';
import { UserDocument } from 'src/Models/Interface/user.interface';
import { UserService } from 'src/Services/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createTodo(userDto: UserDto, res: any): Promise<UserDocument>;
}
