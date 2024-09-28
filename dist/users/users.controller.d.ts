import { UsersService } from './users.service';
import { UserDto } from './user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(userDto: UserDto): Promise<import("./schemas/user.schema").User>;
    findAll(): Promise<UserDto[]>;
    findByUserName(username: string): Promise<import("./schemas/user.schema").User>;
    update(username: string, user: UserDto): Promise<import("./schemas/user.schema").User>;
    delete(username: string): Promise<{
        code: number;
        message: String;
    }>;
}
