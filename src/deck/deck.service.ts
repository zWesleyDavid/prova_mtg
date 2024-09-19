import { Injectable } from '@nestjs/common';
import { ComandanteService } from 'src/comandante/comandante.service';
import { HttpService } from '@nestjs/axios';
import { writeFile } from 'fs/promises';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class deckService {

    private readonly mtgApiUrl: string = 'https://api.magicthegathering.io/v1/cards';

    constructor(
        private readonly httpService: HttpService,
        private readonly comandanteService: ComandanteService,
    ) { }

    async getDeck(): Promise<any> {
        const comandanteInfo = await this.comandanteService.getComandanteInfo();
        const comandanteCores = comandanteInfo.data.color_identity.join('&');

        const url = `${this.mtgApiUrl}?colors=${encodeURIComponent(comandanteCores)}&pageSize=99`;

        try {
            const response: AxiosResponse<any> = await firstValueFrom(
                this.httpService.get(url),
            );
            return response.data.cards;
        } catch (error) {
            console.error('Erro ao montar o deck:', error.message);
            throw new Error(`Deu pra montar o deck não: ${error.message}`);
        }
    }

    private async salvarDeck(deck: any): Promise<void> {
        const filePath = './deck.json';
        await writeFile(filePath, JSON.stringify(deck, null, 2), 'utf-8');
    }


}