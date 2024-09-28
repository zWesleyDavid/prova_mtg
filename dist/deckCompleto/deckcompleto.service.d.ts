import { HttpService } from '@nestjs/axios';
import { Model } from 'mongoose';
import { DeckDocument } from './deck.schema';
export declare class DeckCompletoService {
    private readonly httpService;
    private deckModel;
    constructor(httpService: HttpService, deckModel: Model<DeckDocument>);
    getCommanderAndDeck(nomeComandante: string): Promise<{
        commander: {
            name: any;
            imageUrl: any;
            manaCost: any;
            type: any;
        };
        deck: any;
    }>;
}
