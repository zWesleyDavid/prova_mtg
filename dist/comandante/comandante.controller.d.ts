import { ComandanteService } from './comandante.service';
export declare class ComandanteController {
    private readonly comandanteService;
    constructor(comandanteService: ComandanteService);
    getComandante(): Promise<import("axios").AxiosResponse<any, any>>;
}
