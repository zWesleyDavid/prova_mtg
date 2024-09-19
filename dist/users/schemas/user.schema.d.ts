import { HydratedDocument } from 'mongoose';
import { Role } from 'src/auth/roles/enums/roles.enum';
export type UserDocument = HydratedDocument<User>;
export declare class User {
    id: string;
    username: string;
    password: string;
    roles: Role;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
}>;
