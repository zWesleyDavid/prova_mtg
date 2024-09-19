import { HttpService } from '@nestjs/axios';
import { Model } from 'mongoose';
import { DeckDocument } from './deck.schema';
export declare class DeckCompletoService {
    private readonly httpService;
    private deckModel;
    constructor(httpService: HttpService, deckModel: Model<DeckDocument>);
    getCommanderAndDeck(): Promise<{
        commander: any;
        deck: any;
    }>;
}
