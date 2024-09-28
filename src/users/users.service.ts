import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './user.dto';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';
import { User} from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name) private userModel: Model<User>
    ) {}

    async userExists(username: string): Promise<boolean> {
        const user = await this.userModel.findOne({ username });
        return !!user; 
      }
    
      async create(userDto: UserDto): Promise<User> {
        const createdUser = new this.userModel(userDto);
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

        return this.userModel.findOneAndUpdate({ username}, { new: true }).exec();

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
