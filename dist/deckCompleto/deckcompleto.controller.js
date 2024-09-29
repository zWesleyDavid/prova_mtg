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
exports.DeckCompletoController = void 0;
const common_1 = require("@nestjs/common");
const deckcompleto_service_1 = require("./deckcompleto.service");
const auth_guard_1 = require("../auth/auth.guard");
const roles_decorator_1 = require("../auth/roles/decorators/roles.decorator");
const roles_guard_1 = require("../auth/roles/roles.guard");
const roles_enum_1 = require("../auth/roles/enums/roles.enum");
let DeckCompletoController = class DeckCompletoController {
    constructor(deckCompletoService) {
        this.deckCompletoService = deckCompletoService;
    }
    async getDeck(comandante) {
        const deck = await this.deckCompletoService.getCommanderAndDeck(comandante);
        return deck;
    }
    async getAllDecks() {
        const decks = await this.deckCompletoService.getAllDecks();
        return decks;
    }
};
exports.DeckCompletoController = DeckCompletoController;
__decorate([
    (0, common_1.Get)(':comandante'),
    __param(0, (0, common_1.Param)('comandante')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeckCompletoController.prototype, "getDeck", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.Admin),
    (0, common_1.Get)('/admin/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeckCompletoController.prototype, "getAllDecks", null);
exports.DeckCompletoController = DeckCompletoController = __decorate([
    (0, common_1.Controller)('deckcompleto'),
    __metadata("design:paramtypes", [deckcompleto_service_1.DeckCompletoService])
], DeckCompletoController);
//# sourceMappingURL=deckcompleto.controller.js.map