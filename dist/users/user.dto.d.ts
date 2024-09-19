import { Role } from "../auth/roles/enums/roles.enum";
export declare class UserDto {
    id: string;
    username: string;
    password: string;
    roles: [Role];
}
