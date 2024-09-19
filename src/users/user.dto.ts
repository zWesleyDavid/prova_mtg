import { Role } from "../auth/roles/enums/roles.enum";

export class UserDto {
    id: string;

    @IsString()
    @MinLenght(4, {message: 'O nome de usuário deve ter pelo menos 4 caracteres!' })
    username: string;
    
    @IsString()
    @MinLenght(6, {message: 'A senha deve ter pelo menos 6 caracteres' })
    password: string;
    
    @IsArray()
    @IsEnum(Role, { each: true, message: 'Roles inválidas' })
    roles: [Role];
}

















// import {Roles} from "../auth/roles/enums/role.enum";

// export class UserDto {
//     id: string;
//     username: string;
//     password: any;
//     roles: [Role];
// }