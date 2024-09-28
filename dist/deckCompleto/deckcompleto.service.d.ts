import { HttpService } from '@nestjs/axios';
import { Model } from 'mongoose';
import { DeckDocument } from './deck.schema';
export declare class DeckCompletoService {
    private readonly httpService;
    private deckModel;
    findById(id: string): void;
    constructor(httpService: HttpService, deckModel: Model<DeckDocument>);
    getCommanderAndDeck(nomeComandante: string): Promise<{
        commander: any;
        deck: any;
    }>;
}
