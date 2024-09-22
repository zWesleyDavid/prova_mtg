import { ComandanteService } from './comandante.service';
export declare class ComandanteController {
    private readonly comandanteService;
    constructor(comandanteService: ComandanteService);
    getComandante(nomeComandante: string): Promise<import("axios").AxiosResponse<any, any>>;
}
