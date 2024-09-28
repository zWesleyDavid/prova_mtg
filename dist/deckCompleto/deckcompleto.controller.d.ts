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
        };
        deck: any;
    }>;
}
