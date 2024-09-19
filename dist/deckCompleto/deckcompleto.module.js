"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeckCompletoModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const mongoose_1 = require("@nestjs/mongoose");
const deckcompleto_service_1 = require("./deckcompleto.service");
const deckcompleto_controller_1 = require("./deckcompleto.controller");
const deck_schema_1 = require("./deck.schema");
let DeckCompletoModule = class DeckCompletoModule {
};
exports.DeckCompletoModule = DeckCompletoModule;
exports.DeckCompletoModule = DeckCompletoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            mongoose_1.MongooseModule.forFeature([{ name: 'Deck', schema: deck_schema_1.DeckSchema }]),
        ],
        controllers: [deckcompleto_controller_1.DeckCompletoController],
        providers: [deckcompleto_service_1.DeckCompletoService],
    })
], DeckCompletoModule);
//# sourceMappingURL=deckcompleto.module.js.map