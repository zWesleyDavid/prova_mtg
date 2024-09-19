import { UserDto } from './user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(newUser: UserDto): Promise<User>;
    findByUserName(username: string): Promise<User | null>;
}
