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
exports.DeckCompletoController = void 0;
const common_1 = require("@nestjs/common");
const deckcompleto_service_1 = require("./deckcompleto.service");
let DeckCompletoController = class DeckCompletoController {
    constructor(deckCompletoService) {
        this.deckCompletoService = deckCompletoService;
    }
    async getDeck() {
        const deck = await this.deckCompletoService.getCommanderAndDeck();
        return deck;
    }
};
exports.DeckCompletoController = DeckCompletoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeckCompletoController.prototype, "getDeck", null);
exports.DeckCompletoController = DeckCompletoController = __decorate([
    (0, common_1.Controller)('deckcompleto'),
    __metadata("design:paramtypes", [deckcompleto_service_1.DeckCompletoService])
], DeckCompletoController);
//# sourceMappingURL=deckcompleto.controller.js.map