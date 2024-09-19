"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deckModule = void 0;
const common_1 = require("@nestjs/common");
const deck_controller_1 = require("./deck.controller");
const deck_service_1 = require("./deck.service");
const axios_1 = require("@nestjs/axios");
const comandante_module_1 = require("../comandante/comandante.module");
let deckModule = class deckModule {
};
exports.deckModule = deckModule;
exports.deckModule = deckModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule, comandante_module_1.ComandanteModule],
        controllers: [deck_controller_1.deckController],
        providers: [deck_service_1.deckService],
    })
], deckModule);
//# sourceMappingURL=deck.module.js.map