<<<<<<< HEAD
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

=======
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

>>>>>>> c97005e54684d39103809c27e2c9aa6fbec032d4
export const UserSchema = SchemaFactory.createForClass(User);