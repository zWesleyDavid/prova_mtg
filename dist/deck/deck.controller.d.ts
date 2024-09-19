import { deckService } from "./deck.service";
export declare class deckController {
    private readonly deckService;
    constructor(deckService: deckService);
    getDeck(): Promise<any>;
}
