import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/auth/roles/enums/roles.enum';



@Schema()
export class User extends Document{
  
    @Prop()
    id: string;

    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop({ type: [String], enum: Role, default: [Role.User] })
    roles: Role[];

}

export const UserSchema = SchemaFactory.createForClass(User);