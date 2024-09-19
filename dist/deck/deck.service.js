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
exports.deckService = void 0;
const common_1 = require("@nestjs/common");
const comandante_service_1 = require("../comandante/comandante.service");
const axios_1 = require("@nestjs/axios");
const promises_1 = require("fs/promises");
const rxjs_1 = require("rxjs");
let deckService = class deckService {
    constructor(httpService, comandanteService) {
        this.httpService = httpService;
        this.comandanteService = comandanteService;
        this.mtgApiUrl = 'https://api.magicthegathering.io/v1/cards';
    }
    async getDeck() {
        const comandanteInfo = await this.comandanteService.getComandanteInfo();
        const comandanteCores = comandanteInfo.data.color_identity.join('&');
        const url = `${this.mtgApiUrl}?colors=${encodeURIComponent(comandanteCores)}&pageSize=99`;
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
            return response.data.cards;
        }
        catch (error) {
            console.error('Erro ao montar o deck:', error.message);
            throw new Error(`Deu pra montar o deck não: ${error.message}`);
        }
    }
    async salvarDeck(deck) {
        const filePath = './deck.json';
        await (0, promises_1.writeFile)(filePath, JSON.stringify(deck, null, 2), 'utf-8');
    }
};
exports.deckService = deckService;
exports.deckService = deckService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        comandante_service_1.ComandanteService])
], deckService);
//# sourceMappingURL=deck.service.js.map