import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ){}

    async create(newUser: UserDto): Promise<User> {
        newUser.id = uuid();
        newUser.password = bcrypt.hashSync(newUser.password, 10);
        const createdUser = new this.userModel(newUser);
        return createdUser.save();
    }

    async findByUserName(username: string): Promise<User | null> {
        return this.userModel.findOne({username}).exec();
    }
}
