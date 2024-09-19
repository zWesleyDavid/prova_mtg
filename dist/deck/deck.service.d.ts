import { ComandanteService } from 'src/comandante/comandante.service';
import { HttpService } from '@nestjs/axios';
export declare class deckService {
    private readonly httpService;
    private readonly comandanteService;
    private readonly mtgApiUrl;
    constructor(httpService: HttpService, comandanteService: ComandanteService);
    getDeck(): Promise<any>;
    private salvarDeck;
}
