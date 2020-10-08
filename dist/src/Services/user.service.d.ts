import { Model } from 'mongoose';
import { UserDocument } from 'src/Models/Interface/user.interface';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    createUser(user: UserDocument): Promise<UserDocument>;
}
