import { DeckCompletoService } from './deckcompleto.service';
export declare class DeckCompletoController {
    private readonly deckCompletoService;
    constructor(deckCompletoService: DeckCompletoService);
    getDeck(comandante: string): Promise<{
        commander: {
            name: any;
            imageUrl: any;
            manaCost: any;
            type: any;
            playerId: string;
        };
        deck: any;
    }>;
    getAllDecks(): Promise<(import("mongoose").Document<unknown, {}, import("./deck.schema").DeckDocument> & import("./deck.schema").DeckDocument & Required<{
        _id: unknown;
    }>)[]>;
}
