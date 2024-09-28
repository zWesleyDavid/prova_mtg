import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class ComandanteService {
  
  private readonly nomeComandante: string;
  private readonly scryfallUrl: string = 'https://api.scryfall.com/cards/named';

  constructor(private readonly httpService: HttpService) {}

  async getComandanteInfo(nomeComandante: string): Promise<AxiosResponse<any>> {
    const url = `${this.scryfallUrl}?fuzzy=${encodeURIComponent(this.nomeComandante)}`;

    try {
      const response = await this.httpService.get(url).toPromise();
      return response.data;
    } catch (error) {
      throw new Error('Deu ruim bixo: ${error.message');
    }
  }
}
