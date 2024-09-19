import { DeckCompletoService } from './deckcompleto.service';
export declare class DeckCompletoController {
    private readonly deckCompletoService;
    constructor(deckCompletoService: DeckCompletoService);
    getDeck(): Promise<{
        commander: any;
        deck: any;
    }>;
}
