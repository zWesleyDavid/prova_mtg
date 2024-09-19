import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from 'src/auth/roles/enums/roles.enum';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  
    @Prop()
    id: string;

    @Prop()
    username: string;

    @Prop()
    password: string;

    @Prop()
    roles: Role;

}

export const UserSchema = SchemaFactory.createForClass(User);