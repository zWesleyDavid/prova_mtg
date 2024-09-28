import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
export declare class ComandanteService {
    private readonly httpService;
    private readonly nomeComandante;
    private readonly scryfallUrl;
    constructor(httpService: HttpService);
    getComandantes(): Promise<AxiosResponse<any>>;
    getComandanteInfo(nomeComandante: string): Promise<AxiosResponse<any>>;
}
