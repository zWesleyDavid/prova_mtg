import { Injectable, NotFoundException } from '@nestjs/common';
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
    ) {}

    async create(newUser: UserDto): Promise<User> {
        newUser.id = uuid();
        newUser.password = bcrypt.hashSync(newUser.password, 10);
        const createdUser = new this.userModel(newUser);
        return createdUser.save();
    }

    async findAll(): Promise<UserDto[]> {
        return this.userModel.find().exec();
    }

    async findByUserName(username: string): Promise<User | null> {
        const user = await this.userModel.findOne({username}).exec();

        if(!user) {
           throw new NotFoundException(`Usuário com nome '${username}' não existe!`);
        }

        return user;
    }

    async update(username: string, update: UserDto): Promise<User> {
        const updateUser = await this.userModel.findOneAndUpdate(
            { username },
            { $set: update },
            { new: true }
        ).exec();

        if(!updateUser){
            throw new NotFoundException(`Usuário com nome '${username}' não existe!`);
        }

        return update;

    }

    async delete(username: string): Promise<{code: number, message: String}> {
        const deleteUser = await this.userModel.findOneAndDelete(
            { username }
        ).exec();

        if(!deleteUser){
            throw new NotFoundException(`Usuário com nome '${username}' não existe!`);
        }

        return {code: 200, message: `Usuário '${username}' deletado com sucesso!`}

    }

}
