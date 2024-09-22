"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeckSchema = void 0;
const mongoose_1 = require("mongoose");
exports.DeckSchema = new mongoose_1.Schema({
    commander: { type: Object, required: true },
    deck: { type: Array, required: true },
});
//# sourceMappingURL=deck.schema.js.map