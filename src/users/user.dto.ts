import { Role } from "../auth/roles/enums/roles.enum";

export class UserDto {
    id: string;
    username: string;
    password: string;
    roles: [Role];
}

// import {Roles} from "../auth/roles/enums/role.enum";

// export class UserDto {
//     id: string;
//     username: string;
//     password: any;
//     roles: [Role];
// }