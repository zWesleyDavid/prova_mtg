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
exports.DeckCompletoService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DeckCompletoService = class DeckCompletoService {
    constructor(httpService, deckModel) {
        this.httpService = httpService;
        this.deckModel = deckModel;
    }
    async getCommanderAndDeck() {
        const commanderUrl = `https://api.magicthegathering.io/v1/cards?name=isshin`;
        const commanderResponse = await this.httpService.get(commanderUrl).toPromise();
        const commander = commanderResponse.data.cards[0];
        const colors = commander.colors.join(',');
        const deckUrl = `https://api.magicthegathering.io/v1/cards?colors=${colors}&pageSize=99`;
        const deckResponse = await this.httpService.get(deckUrl).toPromise();
        const deck = deckResponse.data.cards;
        const deckJson = {
            commander,
            deck,
        };
        const createdDeck = new this.deckModel(deckJson);
        await createdDeck.save();
        return deckJson;
    }
};
exports.DeckCompletoService = DeckCompletoService;
exports.DeckCompletoService = DeckCompletoService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)('Deck')),
    __metadata("design:paramtypes", [axios_1.HttpService,
        mongoose_2.Model])
], DeckCompletoService);
//# sourceMappingURL=deckcompleto.service.js.map