import { Injectable, NotFoundException } from '@nestjs/common';
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

    async getCommanderAndDeck(nomeComandante: string) {
        const commanderUrl = `https://api.magicthegathering.io/v1/cards?name=${encodeURIComponent(nomeComandante)}`;

        // Buscar o comandante
        const commanderResponse = await this.httpService.get(commanderUrl).toPromise();
        const commander = commanderResponse.data.cards[0]; 

        if (!commander) {
            throw new NotFoundException('Comandante não encontrado!');
        }

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

    async editDeck(id: string, updateData: Partial<DeckDocument>) {
        const updatedDeck = await this.deckModel.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedDeck) {
            throw new NotFoundException('Deck não encontrado!');
        }

        return updatedDeck;
    }

    async deleteDeck(id: string) {
        const deletedDeck = await this.deckModel.findByIdAndDelete(id);

        if (!deletedDeck) {
            throw new NotFoundException('Deck não encontrado!');
        }

        return { message: 'Deck excluído com sucesso!' };
    }
}
