import { Document } from 'mongoose';
import { Role } from 'src/auth/roles/enums/roles.enum';
export declare class User extends Document {
    id: string;
    username: string;
    password: string;
    roles: Role[];
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User> & User & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & Required<{
    _id: unknown;
}>>;
