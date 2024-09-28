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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
const roles_enum_1 = require("../auth/roles/enums/roles.enum");
const class_validator_1 = require("class-validator");
class UserDto {
}
exports.UserDto = UserDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(4, { message: 'O nome de usuário deve ter pelo menos 4 caracteres!' }),
    __metadata("design:type", String)
], UserDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6, { message: 'A senha deve ter pelo menos 6 caracteres' }),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(roles_enum_1.Role, { each: true, message: 'Roles inválidas' }),
    __metadata("design:type", Array)
], UserDto.prototype, "roles", void 0);
//# sourceMappingURL=user.dto.js.map