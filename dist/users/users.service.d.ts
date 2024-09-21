import { UserDto } from './user.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    create(UserDto: UserDto): Promise<User>;
    findAll(): Promise<UserDto[]>;
    findByUserName(username: string): Promise<User | null>;
    update(username: string, update: UserDto): Promise<User>;
    delete(username: string): Promise<{
        code: number;
        message: String;
    }>;
}
