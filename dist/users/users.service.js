"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const bcrypt = require("bcrypt");
const user_schema_1 = require("./schemas/user.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(newUser) {
        newUser.id = (0, uuid_1.v4)();
        newUser.password = bcrypt.hashSync(newUser.password, 10);
        const createdUser = new this.userModel(newUser);
        return createdUser.save();
    }
    async findAll() {
        return this.userModel.find().exec();
    }
    async findByUserName(username) {
        const user = await this.userModel.findOne({ username }).exec();
        if (!user) {
            throw new common_1.NotFoundException(`Usuário com nome '${username}' não existe!`);
        }
        return user;
    }
    async update(username, update) {
        const updateUser = await this.userModel.findOneAndUpdate({ username }, { $set: update }, { new: true }).exec();
        if (!updateUser) {
            throw new common_1.NotFoundException(`Usuário com nome '${username}' não existe!`);
        }
        return update;
    }
    async delete(username) {
        const deleteUser = await this.userModel.findOneAndDelete({ username }).exec();
        if (!deleteUser) {
            throw new common_1.NotFoundException(`Usuário com nome '${username}' não existe!`);
        }
        return { code: 200, message: `Usuário '${username}' deletado com sucesso!` };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map