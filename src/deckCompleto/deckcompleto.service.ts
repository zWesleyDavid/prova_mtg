import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeckDocument } from './deck.schema';

@Injectable()
export class DeckCompletoService {
    constructor(
        private readonly httpService: HttpService,
        @InjectModel('Deck') private deckModel: Model<DeckDocument>,
    ) { }

    async getCommanderAndDeck() {
        const commanderUrl = `https://api.magicthegathering.io/v1/cards?name=isshin`;

        // Buscar o comandante
        const commanderResponse = await this.httpService.get(commanderUrl).toPromise();
        const commander = commanderResponse.data.cards[0]; // Assumindo que o comandante é o primeiro resultado

        const colors = commander.colors.join(',');

        // Buscar 99 cartas com base nas cores do comandante
        const deckUrl = `https://api.magicthegathering.io/v1/cards?colors=${colors}&pageSize=99`;
        const deckResponse = await this.httpService.get(deckUrl).toPromise();
        const deck = deckResponse.data.cards;

        // Gerar o JSON
        const deckJson = {
            commander,
            deck,
        };

        // Salvar no MongoDB
        const createdDeck = new this.deckModel(deckJson);
        await createdDeck.save();

        return deckJson;
    }
}
