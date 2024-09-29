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

    async getAllDecks() {
        return this.deckModel.find().exec();
    }

    async getCommanderAndDeck(nomeComandante: string) {
        const commanderUrl = `https://api.magicthegathering.io/v1/cards?name=${encodeURIComponent(nomeComandante)}`;

        // Buscar o comandante
        const commanderResponse = await this.httpService.get(commanderUrl).toPromise();
        const commander = commanderResponse.data.cards[0]; // Assumindo que o comandante é o primeiro resultado

        if (!commanderResponse.data.cards || commanderResponse.data.cards.length === 0) {
            throw new Error('Comandante não encontrado!');
        }

        let deckUrl = '';

        // Verificar se o comandante tem cores
        if (commander.colors && commander.colors.length > 0) {
            const colors = commander.colors.join(',');
            // Buscar 99 cartas com base nas cores do comandante
            deckUrl = `https://api.magicthegathering.io/v1/cards?colors=${colors}&pageSize=99`;
        } else {
            // Se o comandante for incolor, buscar 99 cartas sem filtro de cores
            deckUrl = `https://api.magicthegathering.io/v1/cards?pageSize=99`;
        }

        const deckResponse = await this.httpService.get(deckUrl).toPromise();
        const deck = deckResponse.data.cards.map(card => ({
            name: card.name,
            imageUrl: card.imageUrl,
            manaCost: card.manaCost,
            type: card.type,
        }));

        // Gerar o JSON apenas com as informações essenciais
        const deckJson = {
            commander: {
                name: commander.name,
                imageUrl: commander.imageUrl,
                manaCost: commander.manaCost,
                type: commander.type,
                playerId: '',
            },
            deck,
        };

        // Salvar no MongoDB
        const createdDeck = new this.deckModel(deckJson);
        await createdDeck.save();

        return deckJson;
    }

}
